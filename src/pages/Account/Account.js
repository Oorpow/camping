import { Grid, Avatar, Link, Typography, Tab, Box } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import styles from './Account.module.less'
import AccountInfo from '../../components/content/Account/AccountInfo/AccountInfo'
import Order from '../../components/content/Account/Order/Order'

const Account = () => {
	const [tabValue, setTabValue] = useState('Orders')

	const sideRoutes = [
		{
			name: 'Orders',
			icon: 'https://www.wecamped.com/wp-content/uploads/2022/03/orders.svg',
		},
		{
			name: 'Account Info',
		},
	]

	const handleTabChange = (e, newValue) => {
		setTabValue(newValue)
	}

	// 折叠面板
	const Collapse = () => {
		return (
			<TabContext value={tabValue}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList
						onChange={handleTabChange}
						aria-label="lab API tabs example"
					>
						{sideRoutes.map((item) => (
							<Tab label={item.name} value={item.name} key={item.name} />
						))}
					</TabList>
				</Box>
				<TabPanel value={sideRoutes[0].name}>
					<Order />
				</TabPanel>
				<TabPanel value={sideRoutes[1].name}>
					<AccountInfo />
				</TabPanel>
			</TabContext>
		)
	}

	return (
		<div className={styles.account}>
			<Grid container>
				<Grid container item>
					{/* <div className={styles.account_sidebar}> */}
						<Grid item md={3}>
							{/* avatar */}
							<div className={styles.account_sidebar_avatar}>
								<Avatar
									alt="Remy Sharp"
									src="/static/images/avatar/1.jpg"
									sx={{ width: 60, height: 60 }}
								/>
								<div
									className={
										styles.account_sidebar_avatar_name
									}
								>
									<span>Oorpow</span>
									<Link
										href="#"
										underline="none"
										color="#ccc"
									>
										LOGOUT
									</Link>
								</div>
							</div>
						</Grid>

						<Grid item md={9}>
							{/* show when > 1200px*/}
							<div className={styles.account_sidebar_routes}>
								<div
									className={
										styles.account_sidebar_routes_item
									}
								>
									{/* 折叠面板 */}
									<Collapse />
								</div>
							</div>
						</Grid>

						{/* show when < 1200px */}
						<div className={styles.account_sidebar_tabs}></div>
					{/* </div> */}
				</Grid>
			</Grid>
		</div>
	)
}

export default Account
