import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CardItem from '../../components/common/CardItem/CardItem'
import LocationInfo from '../../components/content/Location/LocationInfo/LocationInfo'
import LocationMap from '../../components/content/Location/LocationMap/LocationMap'
import LocationPark from '../../components/content/Location/LocationPark/LocationPark'
import styles from './Location.module.less'

const Location = () => {
	const imgList = [
		{
			id: 1,
			img: 'https://wecamped.com/wp-content/uploads/2022/03/image1-2.jpg',
		},
		{
			id: 2,
			img: 'https://wecamped.com/wp-content/uploads/2022/03/60df74da860f52de6502e602_d376120f-d5fc-40f5-970f-9a8accd8ce71-1024x680.png',
		},
		{
			id: 3,
			img: [
				{
					url: 'https://wecamped.com/wp-content/uploads/2022/03/Screen-Shot-2021-06-18-at-11.29.24-PM.png',
				},
				{
					url: 'https://wecamped.com/wp-content/uploads/2022/03/60df74da860f52391e02e5ea_6bfbc095-895a-4ffe-8a5f-d9b1ab9c1705.png',
				},
			],
		},
		{
			id: 4,
			img: [
				{
					url: 'https://wecamped.com/wp-content/uploads/2022/03/60df74da860f52823e02e605_4624c0e7-3f6e-4fef-be93-d7405fb0576b.png',
				},
				{
					url: 'https://wecamped.com/wp-content/uploads/2022/03/60df74da860f52c93302e604_91dbd9c5-a713-4c1b-8493-8f9b6e13bfc7.png',
				},
			],
		},
	]

	const locationInfo = [
		{
			svgUrl: 'https://wecamped.com/wp-content/uploads/2022/02/paper.svg',
			content:
				'Lake Perris itself offers a number of rich activities, including camping, swimming, boating, hiking, horseback riding and cycling, in addition to the nearby Ya-I Heki’ Regional Indian Museum which offers a rich history on the Native American people that once made Lake Perris their home, and displays of local flora and fauna native to the region.',
			title: 'About This Location',
		},
		{
			svgUrl: 'https://wecamped.com/wp-content/uploads/2022/02/dog.svg',
			content:
				'Pets are required to be leashed (6 feet or less), caged, or in vehicle and never left unattended. Pets are not allowed on unpaved trails and on the sand (beach areas) because the water is used for municipal drinking water, and not allowed on Allesandro Island or the Bernasconi Beach area. Pets may go on your boat, but can NOT have any body contact with the water at any time.',
			title: 'Pet Friendly',
		},
	]

	const cardList = [
		{
			src: 'https://wecamped.com/wp-content/uploads/2022/03/RON3947-scaled.jpg',
			title: 'Classic Suites',
			capacity: 4,
			price: 260,
		},
		{
			src: 'https://wecamped.com/wp-content/uploads/2022/03/60df74e04f408c95cb75e25a_ef854b0b-e969-44e1-bd34-23dcfa48e62b.png',
			title: 'Deluxe Couples',
			capacity: 3,
			price: 230,
		},
		{
			src: 'https://wecamped.com/wp-content/uploads/2022/03/60df74e0d2c4b279d0529cdd_4167d31d-9cb8-411a-aaa2-1de56dffb1f8.png',
			title: 'Classic Couples',
			capacity: 2,
			price: 200,
		},
	]

	const getDataType = (data) => typeof data === 'string'

	return (
		<div className={styles.location}>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				marginTop="10px"
				className={styles.location_main}
			>
				<h1 className={styles.location_main_lake_title}>Lake Perris Recreation Area</h1>
				{/* 左列 */}
				<Grid container item xs={10} sm={10} md={10} lg={8} direction="column">
					{/* lake */}
					<Grid item className={styles.location_lake}>
						<div className={styles.location_lake_imgs}>
							{imgList.map((item) => (
								<div
									className={styles.location_lake_imgs_item}
									key={item.id}
								>
									{getDataType(item.img) && (
										<img src={item.img} />
									)}
									{Array.isArray(item.img) &&
										item.img.map((sub, index) => (
											<img src={sub.url} key={index} />
										))}
								</div>
							))}
						</div>
						<h5>
							“A sparkling jewel and a land of mystery…” – Lake
							Perris State Recreation Area
						</h5>
					</Grid>

					{/* map */}
					<Grid item className={styles.location_map}>
						<LocationMap />
					</Grid>

					{/* park */}
					<Grid item className={styles.location_park}>
						<LocationPark />
					</Grid>

					{/* about location */}
					<Grid item>
						<LocationInfo {...locationInfo[0]} />
					</Grid>

					{/* pets */}
					<Grid item>
						<LocationInfo {...locationInfo[1]} />
					</Grid>

					<Grid item marginTop="30px">
						<h2>View Our Tents</h2>
						<div className={styles.location_tents}>
							{cardList.map((item, i) => (
								<CardItem key={i} {...item} />
							))}
						</div>
					</Grid>
					
					{/* book in md */}
					<Grid item className={styles.book_main_lg}>
						<div className={styles.book_box}>
							<h4>Ready To Book?</h4>
							<NavLink
								to="/register"
								className={styles.book_button}
							>
								Sign Up Here
							</NavLink>
						</div>
					</Grid>

				</Grid>

				{/* 右列 */}
				<Grid item lg={3.5} className={styles.book_main}>
					<div className={styles.book_box}>
						<h4>Ready To Book?</h4>
						<NavLink to="/register" className={styles.book_button}>
							Sign Up Here
						</NavLink>
					</div>
				</Grid>

			</Grid>
		</div>
	)
}

export default Location
