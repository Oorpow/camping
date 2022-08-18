import React from 'react'
import {
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Avatar,
	CssBaseline,
	Typography,
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

	// 路由Menu
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
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
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	// 头像Menu
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
								onClick={handleClick}
								size="large"
								sx={{ ml: 2 }}
								aria-controls={open ? 'route-menu' : undefined}
								aria-haspopup="true"
								aria-expanded={open ? 'true' : undefined}
							>
								<FormatAlignCenterIcon
									sx={{ color: '#335D65' }}
								/>
							</IconButton>
						</li>
					</ul>
				</Grid>
			</Grid>
			{/* 汉堡按钮 */}
			<Menu
				anchorEl={anchorEl}
				id="route-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={menuProps}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				{router[1].children.slice(4).map((item) => (
					<MenuItem key={item.path}>
						<NavLink to={item.path} style={{color: '#000'}}>
							{item.meta && item.meta.title}
						</NavLink>
					</MenuItem>
				))}
			</Menu>
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
						<NavLink to="/account" style={{ color: '#000', marginLeft: '5px' }}>
							personal
						</NavLink>
					</Typography>
				</MenuItem>
				<MenuItem onClick={logout}>
					<LogoutIcon fontSize="small" />
					<Typography variant="body2" sx={{ color: '#000', marginLeft: '5px' }}>
						Log out
					</Typography>
				</MenuItem>
			</Menu>
		</div>
	)
}

export default Header
