import React from 'react'
import { Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'
import router from '../../../router'
import styles from './Header.module.less'

const Header = () => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			className={styles.header}
		>
			<Grid item md={3}>
				<div>logo</div>
			</Grid>
			<Grid item md={7}>
				<nav>
					<ul>
						{router.slice(0, router.length - 2).map((item) => (
							<li key={item.path}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										isActive ? styles.activeLink : undefined
									}
								>
									{item.meta && item.meta.title}
								</NavLink>
							</li>
						))}
                        <li>
                            <NavLink to="/login" style={{color: '#335D65'}}>Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={styles.register}>Sign Up</NavLink>
                        </li>
					</ul>
				</nav>
			</Grid>
		</Grid>
	)
}

export default Header
