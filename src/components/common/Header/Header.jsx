import React, { useState } from 'react'
import {
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Avatar,
	CssBaseline,
	Typography,
	Drawer,
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
} from '@mui/material'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import LogoutIcon from '@mui/icons-material/Logout'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import { NavLink, useNavigate } from 'react-router-dom'
import router from '../../../router'
import styles from './Header.module.less'
import { useDispatch, useSelector } from 'react-redux'
import { removeUserInfo } from '../../../store/reducers/accessReducers'
import { message } from 'antd'

const Header = () => {
	const store = useSelector((state) => state.access)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	// 抽屉
	const [drawer, setDrawer] = useState({
		right: false,
	})
	const toggleDrawer = (anchor, open) => (event) => {
		setDrawer({ ...drawer, [anchor]: open })
	}

	// 头像Menu
	const menuProps = {
		elevation: 0,
		sx: {
			overflow: 'visible',
			filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
			mt: 1.5,
			'& .MuiAvatar-root': {
				width: 32,
				height: 32,
				ml: -0.5,
				mr: 1,
			},
			'&:before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				top: 0,
				right: 14,
				width: 10,
				height: 10,
				bgcolor: 'background.paper',
				transform: 'translateY(-50%) rotate(45deg)',
				zIndex: 0,
			},
		},
	}
	const [accountEl, setAccountEl] = React.useState(null)
	const accountOpen = Boolean(accountEl)
	const handleAccountElClick = (e) => {
		setAccountEl(e.currentTarget)
	}
	const handleAccountElClose = () => {
		setAccountEl(null)
	}

	// 导航至首页
	const navToHome = () => {
		navigate('/home')
	}

	// 退出登录
	const logout = () => {
		dispatch(removeUserInfo())
		navigate('/login')
		message.success('logout success')
	}

	// 已登录显示用户头像，未登录显示另一组件
	const whenLogin = () => {
		if (store.isLogged) {
			return (
				<li>
					<IconButton
						onClick={handleAccountElClick}
						size="large"
						sx={{ ml: 2 }}
						aria-controls={accountOpen ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={accountOpen ? 'true' : undefined}
					>
						<Avatar>{store.info?.firstName}</Avatar>
					</IconButton>
				</li>
			)
		} else {
			return (
				<>
					<li>
						<NavLink to="/login" style={{ color: '#335D65' }}>
							Sign In
						</NavLink>
					</li>
					<li>
						<NavLink to="/register" className={styles.register}>
							Sign Up
						</NavLink>
					</li>
				</>
			)
		}
	}

	return (
		<div className={styles.header}>
			<CssBaseline />
			<Grid container className={styles.header_grid}>
				{/* logo */}
				<Grid item xs={2}>
					<div
						className={styles.header_grid_logo}
						onClick={navToHome}
					>
						<img
							src={
								process.env.REACT_APP_DEV_URL +
								'/images/logo/template.svg'
							}
							alt="Go Camping"
						/>
					</div>
				</Grid>
				{/* 大屏分辨率 导航栏 */}
				<Grid item md={6} className={styles.header_nav_main}>
					<nav>
						<ul>
							{router[1].children.slice(3).map((item) => (
								<li key={item.path}>
									<NavLink
										to={item.path}
										className={({ isActive }) =>
											isActive
												? styles.activeLink
												: undefined
										}
									>
										{item.meta && item.meta.title}
									</NavLink>
								</li>
							))}
							{whenLogin()}
						</ul>
					</nav>
				</Grid>
				{/* 平板分辨率下显示 */}
				<Grid
					container
					item
					xs={8}
					direction="row-reverse"
					className={styles.header_toggle}
				>
					<ul>
						<li>
							<IconButton
								onClick={handleAccountElClick}
								size="large"
								sx={{ ml: 2 }}
								aria-controls={
									accountOpen ? 'account-menu' : undefined
								}
								aria-haspopup="true"
								aria-expanded={accountOpen ? 'true' : undefined}
							>
								<Avatar>{store.info?.firstName}</Avatar>
							</IconButton>
						</li>
						<li>
							<IconButton
								onClick={toggleDrawer('right', true)}
								size="large"
								sx={{ ml: 2 }}
							>
								<FormatAlignCenterIcon
									sx={{ color: '#335D65' }}
								/>
							</IconButton>
						</li>
					</ul>
				</Grid>
			</Grid>
			{/* 头像 */}
			<Menu
				anchorEl={accountEl}
				id="account-menu"
				open={accountOpen}
				onClose={handleAccountElClick}
				onClick={handleAccountElClose}
				PaperProps={menuProps}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem>
					<AccessibilityIcon fontSize="small" />
					<Typography variant="body2">
						<NavLink
							to="/account"
							style={{ color: '#000', marginLeft: '5px' }}
						>
							personal
						</NavLink>
					</Typography>
				</MenuItem>
				<MenuItem onClick={logout}>
					<LogoutIcon fontSize="small" />
					<Typography
						variant="body2"
						sx={{ color: '#000', marginLeft: '5px' }}
					>
						Log out
					</Typography>
				</MenuItem>
			</Menu>
			{/* 抽屉 */}
			<Drawer
				anchor="right"
				open={drawer['right']}
				onClose={toggleDrawer('right', false)}
			>
				<Box onClick={toggleDrawer('right', false)}>
					<List>
						{router[1].children.slice(4).map((item) => (
							<React.Fragment key={item.path}>
								<ListItem
									disablePadding
									style={{ width: '150px' }}
								>
									<ListItemButton>
										<NavLink
											to={item.path}
											style={({ isActive }) =>
												isActive
													? { color: '#335D65' }
													: { color: '#000' }
											}
										>
											<ListItemText
												primary={item.meta.title}
											/>
										</NavLink>
									</ListItemButton>
								</ListItem>
								<Divider />
							</React.Fragment>
						))}
					</List>
				</Box>
			</Drawer>
		</div>
	)
}

export default Header
