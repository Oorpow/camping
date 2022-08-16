import React from 'react'
import { Grid } from '@mui/material'
import styles from './Banner.module.less'

const Banner = () => {
	return (
		<div className={styles.home_banner}>
			<div className={styles.home_banner_mask}></div>
			<Grid
				container
				justifyContent="center"
				className={styles.home_banner_title}
			>
				<Grid item xs={10} md={6} style={{ textAlign: 'center' }}>
					<h1 style={{color: '#fff'}}>Camping Made Easy</h1>
					<p>
						Embark on your high-end camping adventure with WeCamped,
						a full-service camping solution company that provides
						camping gear rental setup, and tear-down services.
						Stylish tents, cozy mattresses, roaring bonfires all
						prepared for you in advance.
					</p>
				</Grid>
			</Grid>
		</div>
	)
}

export default Banner
