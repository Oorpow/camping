import React from 'react'
import Banner from '../../components/content/Home/Banner/Banner'
import styles from './Home.module.less'
import Works from '../../components/content/Home/Works/Works'
import LocationItem from '../../components/content/Home/LocationItem/LocationItem'
import Browse from '../../components/content/Home/Browse/Browse'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'

const Home = () => {
	const access = useSelector(state => state.access)
	
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
