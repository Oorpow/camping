import React, { useEffect } from 'react'
import Banner from '../../components/content/Home/Banner/Banner'
import styles from './Home.module.less'
import Works from '../../components/content/Home/Works/Works'
import LocationItem from '../../components/content/Home/LocationItem/LocationItem'
import Browse from '../../components/content/Home/Browse/Browse'
import { Grid } from '@mui/material'

const Home = () => {
	
	return (
		<div className={styles.home}>
			<Banner />
			{/* works flow */}
			<Grid container direction="column" className={styles.home_container}>
				<Works />
				<LocationItem />
				<Browse />
			</Grid>
		</div>
	)
}

export default Home
