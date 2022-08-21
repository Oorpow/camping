import { Grid, Avatar, Typography, Tab, Box } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import React, { useState } from 'react'
import AccountInfo from '../../components/content/Account/AccountInfo/AccountInfo'
import AccountOrder from '../../components/content/Account/AccountOrder/AccountOrder'
import { useSelector } from 'react-redux'
import { useGetUserInfoQuery } from '../../store/reducers/userReducers'
import styles from './Account.module.less'

const Account = () => {
	const user = useSelector((state) => state.access)
	const { data, isSuccess } = useGetUserInfoQuery(user.info._id)
	const [tabValue, setTabValue] = useState('Orders')

	// tabs导航栏
	const sideRoutes = [
		{
			name: 'Orders',
		},
		{
			name: 'Account Info',
		},
	]

	// 切换tabs组件
	const handleTabChange = (e, newValue) => {
		setTabValue(newValue)
	}

	// tabs面板
	const Collapse = () => {
		return (
			<TabContext value={tabValue}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList
						onChange={handleTabChange}
						aria-label="lab API tabs example"
					>
						{sideRoutes.map((item) => (
							<Tab
								label={item.name}
								value={item.name}
								key={item.name}
							/>
						))}
					</TabList>
				</Box>
				<TabPanel value={sideRoutes[0].name}>
					<AccountOrder userId={user.info._id} />
				</TabPanel>
				<TabPanel value={sideRoutes[1].name}>
					<AccountInfo userInfo={isSuccess && data.data[0]} />
				</TabPanel>
			</TabContext>
		)
	}

	function stringToColor(string) {
		let hash = 0
		let i

		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash)
		}

		let color = '#'

		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff
			color += `00${value.toString(16)}`.slice(-2)
		}
		/* eslint-enable no-bitwise */

		return color
	}

	function stringAvatar(name) {
		return {
			sx: {
				bgcolor: stringToColor(name),
				width: 90,
				height: 90,
				curpor: 'pointer'
			},
			children: name,
		}
	}

	return (
		<Grid container direction="column">
			{/* banner图区域 */}
			<Grid
				container
				item
				className={styles.account_banner}
				justifyContent="center"
				alignItems="center"
			>
				<div className={styles.account_banner_avatar}>
					<Avatar {...stringAvatar(isSuccess && data.data[0].firstName)} />
					<div className={styles.account_banner_avatar_name}>
						<Typography
							variant="subtitle2"
							gutterBottom
							color="#fff"
						>
							{isSuccess &&
								data.data[0].firstName + data.data[0].lastName}
						</Typography>
						<Typography variant="caption" gutterBottom color="#fff">
							{isSuccess && data.data[0].email}
						</Typography>
					</div>
				</div>
			</Grid>
			<Grid container item className={styles.account_main}>
				<Grid item xs={10} className={styles.account_main_box} p={4}>
					<Collapse />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Account
