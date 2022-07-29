import React from 'react'
import { Grid, IconButton, Menu, MenuItem, Tooltip, Avatar } from '@mui/material'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import { NavLink } from 'react-router-dom'
import router from '../../../router'
import styles from './Header.module.less'

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

	return (
		<div className={styles.header}>
			<Grid container margin="auto" alignItems="center" className={styles.header_grid}>
				<Grid item xs={2}>
					<div>logo</div>
				</Grid>
				<Grid item md={10} className={styles.header_nav_main}>
					<nav>
						<ul>
							{router.slice(0, router.length - 2).map((item) => (
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
							<li>
								<NavLink
									to="/login"
									style={{ color: '#335D65' }}
								>
									Sign In
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/register"
									className={styles.register}
								>
									Sign Up
								</NavLink>
							</li>
						</ul>
					</nav>
				</Grid>
				<Grid container item xs={10} direction="row-reverse" className={styles.header_toggle}>
					<Tooltip title="">
						<IconButton
							onClick={handleClick}
							size="small"
							sx={{ ml: 2 }}
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
						>
							<FormatAlignCenterIcon sx={{ color: '#335D65' }} />
						</IconButton>
					</Tooltip>
					<IconButton aria-label="delete">
						<Avatar />
						{/* <DirectionsRunIcon /> */}
					</IconButton>
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
				{router.slice(1, router.length - 2).map((item) => (
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
