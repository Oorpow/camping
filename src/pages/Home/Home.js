import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import Banner from '../../components/content/Home/Banner/Banner'
import styles from './Home.module.less'
import Works from '../../components/content/Home/Works/Works'

const Home = () => {

	return (
		<div className={styles.home}>
			<Banner />
			{/* works flow */}
			<Works />
		</div>
	)
}

export default Home
