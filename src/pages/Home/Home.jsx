import React, { lazy, Suspense } from 'react'
import LazyLoad from 'react-lazyload'
import LocationItem from '../../components/content/Home/LocationItem/LocationItem'
// import Browse from '../../components/content/Home/Browse/Browse'
import { Grid } from '@mui/material'
import styles from './Home.module.less'
import Loading from '../../components/common/Loading/Loading'

const Banner = lazy(() => import('../../components/content/Home/Banner/Banner'))
const Works = lazy(() => import('../../components/content/Home/Works/Works'))
const Browse = lazy(() => import('../../components/content/Home/Browse/Browse'))

const Home = () => {
	return (
		<div className={styles.home}>
			<Banner />
			{/* works flow */}
			<Grid container direction="column" className={styles.home_container}>
				<Works />
				<LazyLoad offset={100}>
					<LocationItem />
				</LazyLoad>

				<LazyLoad>
					<Browse />
				</LazyLoad>
			</Grid>
		</div>
	)
}

export default Home
