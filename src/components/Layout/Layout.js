import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'

const Layout = () => {
	return (
		<Grid container>
			<Header />
			<Outlet />
			<Footer />
		</Grid>
	)
}

export default Layout
