import React from 'react'
import { Grid } from '@mui/material'
import styles from './About.module.less'

const About = () => {
	const provideList = [
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/03/Campground-Reservation-Assist.svg',
			title: 'Campground Reservation Assist',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/03/Premium-Camping-Gear-Rentals.svg',
			title: 'Premium Camping Gear Rentals',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/03/Delivery-Set-up-and-Teardown.svg',
			title: 'Delivery, Set-up and Teardown',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/03/Camping-Concierge-Service.svg',
			title: 'Camping Concierge Service',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/03/Fun-Camping-Activities.svg',
			title: 'Fun Camping Activities',
		},
	]

	const iconList = [
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/04/integrity-1.svg',
			title: 'Our Values',
			content:
				'Wellness is a big part of our company’s focus and we strongly believe that nature is a powerful influence in both our physical and mental lives, so we make sure that every step of your journey is nothing but relaxing and restful.',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/04/camping-1.svg',
			title: 'Behind The Scenes',
			content:
				'WeCamped have spent hundreds of hours scouting for the best campgrounds, providing our campers with the best sceneries, locations, and shades. Our employees have been trained with the best tools and techniques to ensure a quality experience.',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/04/map-1.svg',
			title: 'Locations',
			content:
				'We are currently located in Orange County, covering O’Neill Campground, Lake Perris Campground, Doheny State Beach Campground and many more to come!',
		},
	]

	return (
		<div className={styles.about_page}>
			<div className={styles.about_page_banner}>
				<div className={styles.about_page_mask}></div>
				<h1>About WeCamped</h1>
			</div>

			<Grid
				container
				direction="column"
				className={styles.about_page_main}
			>
				{/* story */}
				<Grid container item direction="column" alignItems="center">
					<Grid item>
						<h1>Our Story</h1>
					</Grid>
					<Grid item className={styles.about_page_story_main}>
						<p>
							Our story begins in 2020, when COVID-19 hits
							worldwide and we see a big surge in outdoor
							activities.
							<br />
							Our founder is a camping enthusiast and has always
							loved being active and outdoors but… camping was
							work.
							<br />
							Our aspiration is to deliver happiness and
							positivity through nature and camping, we want to
							make sure that you can enjoy relaxing in nature
							right when you arrive at the campground.
						</p>
					</Grid>
				</Grid>

				{/* providing */}
				<Grid
					container
					item
					direction="column"
					alignItems="center"
					marginTop="100px"
				>
					<Grid item>
						<h2>We Make Our Campers' Lives Easier By Providing:</h2>
					</Grid>
					<Grid container item className={styles.about_page_provide} spacing={2}>
						{provideList.map((item) => (
							<Grid item xs={6} md={4} lg={2} key={item.url}>
								<div className={styles.about_page_provide_item}>
									<img src={item.url} alt={item.title} />
									<h4>{item.title}</h4>
								</div>
							</Grid>
						))}
					</Grid>
				</Grid>

				{/* cards */}
				<Grid container item marginTop="100px" spacing={2} className={styles.about_page_card}>
					{iconList.map((item) => (
						<Grid item lg={4} key={item.url}>
							<div className={styles.about_page_card_item}>
								<div className={styles.card_item_img}>
									<img src={item.url} alt={item.title} />
									<h3>{item.title}</h3>
								</div>
								<div className={styles.card_item_text}>
									<p>{item.content}</p>
								</div>
							</div>
						</Grid>
					))}
				</Grid>

			</Grid>
		</div>
	)
}

export default About
