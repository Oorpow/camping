import React from 'react'
import LazyLoad from 'react-lazyload'
import LocationItem from '../../components/content/Home/LocationItem/LocationItem'
import Works from '../../components/content/Home/Works/Works'
import Banner from '../../components/content/Home/Banner/Banner'
import Browse from '../../components/content/Home/Browse/Browse'
import { Grid } from '@mui/material'
import styles from './Home.module.less'

const Home = () => {
	return (
		<div className={styles.home}>
			<Banner />
			{/* works flow */}
			<Grid
				container
				direction="column"
				className={styles.home_container}
			>
				<LazyLoad>
					<Works />
				</LazyLoad>
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
