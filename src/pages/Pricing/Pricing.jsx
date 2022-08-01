import React from 'react'
import { Grid } from '@mui/material'
import CardItem from '../../components/common/CardItem/CardItem'
import PricingCardItem from '../../components/content/Pricing/PricingCardItem/PricingCardItem'
import PricingPackage from '../../components/content/Pricing/PricingPackage/PricingPackage'
import styles from './Pricing.module.less'

const Pricing = () => {
	const pricingPriceList = [
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/05/001-tent.svg',
			title: 'Gear Rental Base Price',
			price: 'Starting at $150 per night',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/05/025-river.svg',
			title: 'Campsite Reservation',
			price: 'Starting at: $40',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/05/delivery-truck-2.svg',
			title: 'Delivery, Setup, Teardown',
			price: '1 Tent = $60',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/05/002-explorer.svg',
			title: 'Camping Concierge Service',
			price: '$10',
		},
	]

	const packageList = [
		{
			img: 'https://wecamped.com/wp-content/uploads/2022/05/star-1.svg',
			title: 'Deluxe Package',
			list: [
				'Classic Wecamp, for 4 people, 2 tents',
				'Delivery setup teardown included',
				'Classic Wecamp, for 4 people, 2 tents',
				'Delivery setup teardown included',
				'Classic Wecamp, for 4 people, 2 tents',
				'Delivery setup teardown included',
				'Delivery setup teardown included',
			],
		},
		{
			img: 'https://wecamped.com/wp-content/uploads/2022/05/star-1.svg',
			title: 'Classic Package',
			list: [
				'Classic Wecamp, for 4 people, 2 tents',
				'Delivery setup teardown included',
				'Classic Wecamp, for 4 people, 2 tents',
				'Delivery setup teardown included',
				'Classic Wecamp, for 4 people, 2 tents',
				'Delivery setup teardown included',
				'Delivery setup teardown included',
			],
		},
	]

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
		<div className={styles.pricing_page}>
			<Grid container direction="column" className={styles.pricing_main}>
				{/* Pricing */}
				<Grid
					container
					item
					className={styles.pricing_container}
					direction="column"
				>
					<h1>Pricing</h1>
					<Grid
						container
						item
						spacing={1}
						className={styles.pricing_container_grid}
					>
						{pricingPriceList.map((item, i) => (
							<Grid
								item
								xs={10}
								sm={5}
								md={5}
								lg={3}
								className={styles.pricing_container_item}
								key={i}
							>
								<PricingCardItem {...item} />
							</Grid>
						))}
					</Grid>
				</Grid>

				{/* package pricing */}
				<Grid
					container
					item
					direction="column"
					className={styles.package_grid}
				>
					<h1>Prebuilt Package Pricing</h1>
					<Grid container item spacing={1} justifyContent="center">
						{packageList.map((item, i) => (
							<Grid
								item
								xs={10}
								lg={6}
								className={styles.package_grid_item}
								key={i}
							>
								<PricingPackage {...item} />
							</Grid>
						))}
					</Grid>
				</Grid>

				{/* tent pricing */}
				<Grid
					container
					item
					direction="column"
					className={styles.tent_grid}
				>
					<h1>Tent Pricing</h1>
					<Grid
						container
						item
						rowSpacing={3}
						columnSpacing={2}
						className={styles.tent_grid_card_main}
					>
						{tentsList.map((item) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={6}
								lg={4}
								xl={3}
								marginTop="20px"
								key={item.src}
							>
								<CardItem {...item} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Pricing
