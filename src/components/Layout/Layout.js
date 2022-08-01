import React from 'react'
import { Grid } from '@mui/material'
import { useLocation, Outlet } from 'react-router-dom'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const Layout = () => {
	let location = useLocation()

	const hasHeadAndFoot = (route) => {
		return route !== '/login' && route !== '/register'
	}

	return (
		<Grid container>
			{hasHeadAndFoot(location.pathname) && <Header />}
			<Outlet />
			{hasHeadAndFoot(location.pathname) && <Footer />}
		</Grid>
	)
}

export default Layout
