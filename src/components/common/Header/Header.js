import React from 'react'
import {
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Avatar,
} from '@mui/material'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import { NavLink, useNavigate } from 'react-router-dom'
import router from '../../../router'
import styles from './Header.module.less'
import { useSelector } from 'react-redux'

const Header = () => {
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
	
	// 导航至 account 页
	const navigate = useNavigate()
	const navToAccount = () => {
		navigate('account')
	}

	const store = useSelector((state) => state.access)

	// 已登录显示用户头像，未登录显示另一组件
	const whenLogin = () => {
		if (store.isLogged) {
			return (
				<li>
					<IconButton onClick={navToAccount}>
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
			<Grid
				container
				margin="auto"
				alignItems="center"
				className={styles.header_grid}
			>
				<Grid item xs={2}>
					<div>logo</div>
				</Grid>
				{/* 大屏分辨率 */}
				<Grid item md={10} className={styles.header_nav_main}>
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
					xs={10}
					direction="row-reverse"
					className={styles.header_toggle}
				>
					<ul>
						<li>
							<IconButton onClick={navToAccount}>
								<Avatar>{store.info?.firstName}</Avatar>
							</IconButton>
						</li>
						<li>
							<IconButton
								onClick={handleClick}
								size="large"
								sx={{ ml: 2 }}
								aria-controls={
									open ? 'account-menu' : undefined
								}
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
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={menuProps}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				{router[1].children.slice(2).map((item) => (
					<MenuItem key={item.path}>
						<NavLink to={item.path}>
							{item.meta && item.meta.title}
						</NavLink>
					</MenuItem>
				))}
			</Menu>
		</div>
	)
}

export default Header
