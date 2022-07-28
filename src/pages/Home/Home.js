import React from 'react'
import Banner from '../../components/content/Home/Banner/Banner'
import styles from './Home.module.less'
import Works from '../../components/content/Home/Works/Works'
import LocationItem from '../../components/content/Home/LocationItem/LocationItem'
import Browse from '../../components/content/Home/Browse/Browse'

const Home = () => {
	return (
		<div className={styles.home}>
			<Banner />
			{/* works flow */}
			<div className={styles.home_container}>
				<Works />
				<LocationItem />
				<Browse />
			</div>
		</div>
	)
}

export default Home
