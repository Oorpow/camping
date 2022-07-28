import React, { Suspense } from 'react'
import { Grid } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Header from '../common/Header/Header'
import router from '../../router'
import Loading from '../common/Loading/Loading'
import Footer from '../common/Footer/Footer'

const Layout = () => {
	return (
		<Grid container>
			<Header />
			<Routes>
				{router.map((item, index) => {
					return (
						<Route
							key={index}
							path={item.path}
							element={
								<Suspense fallback={<Loading />}>
									<item.element />
								</Suspense>
							}
						></Route>
					)
				})}
			</Routes>
			<Footer />
		</Grid>
	)
}

export default Layout
