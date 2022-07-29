import React from 'react'
import { Grid } from '@mui/material'
import CardItem from '../../components/common/CardItem/CardItem'
import styles from './Tents.module.less'

const Tents = () => {
	const tentsList = [
		{
			title: 'Classic Suites',
			capacity: 4,
			price: 260,
			src: 'https://wecamped.com/wp-content/uploads/2022/03/RON3947-scaled.jpg',
		},
		{
			title: 'Deluxe Couples',
			capacity: 3,
			price: 230,
			src: 'https://wecamped.com/wp-content/uploads/2022/03/60df74e04f408c95cb75e25a_ef854b0b-e969-44e1-bd34-23dcfa48e62b.png',
		},
		{
			title: 'Classic Suites',
			capacity: 4,
			price: 260,
			src: 'https://wecamped.com/wp-content/uploads/2022/03/60df74e0d2c4b279d0529cdd_4167d31d-9cb8-411a-aaa2-1de56dffb1f8.png',
		},
		{
			title: 'Deluxe WeCamp',
			capacity: 3,
			price: 180,
			src: 'https://wecamped.com/wp-content/uploads/2022/03/DSC08288-Edit-scaled.jpg',
		},
		{
			title: 'Classic WeCamp',
			capacity: 2,
			price: 150,
			src: 'https://wecamped.com/wp-content/uploads/2022/03/60df74e06ee315c0f59db907_18b30fb2-e733-4279-8e0c-7a1fe21eccee-2.png',
		},
	]

	return (
		<div className={styles.tents}>
			<div className={styles.tents_banner}>
				<div className={styles.tents_mask}></div>
				<h1>Our Tents</h1>
			</div>
			{/* card */}
			<div className={styles.tents_main}>
				<Grid container className={styles.tents_main_grid}>
					{tentsList.map((item) => (
						<Grid item xs={12} sm={6} md={4} xl={3} marginTop="20px" key={item.src}>
							<CardItem {...item} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	)
}

export default Tents
