import React from 'react'
import { Grid, Typography } from '@mui/material'
import styles from './About.module.less'

const About = () => {
	const brandStory = [
		{
			title: 'Our Brand Story',
			mainText: [
				'Our story begins in 2020, when COVID-19 hits worldwide and we see a big surge in outdoor activities. Our founder is a camping enthusiast and has always loved being active and outdoors but… camping was work.',
				'Many hours were spent loading and unloading along with setting up, tearing down equipment. Not to mention renting/buying and storing camping equipment.',
				'Here at WeCamped, we aim to make our campers lives easier by providing:',
				'Our aspiration is to deliver happiness and positivity through nature and camping, we want to make sure that you can enjoy relaxing in nature right when you arrive at the campground.',
			],
		},
	]

	const ourValues = [
		{
			title: 'Our Value',
			mainText:
				'Wellness is a big part of our company’s focus and we strongly believe that nature is a powerful influence in both our physical and mental lives, so we make sure that every step of your journey is nothing but relaxing and restful.',
		},
		{
			title: 'Behind the scenes',
			mainText:
				'WeCamped have spent hundreds of hours scouting for the best campgrounds, providing our campers with the best sceneries, locations, and shades. Our employees have been trained with the best tools and techniques to ensure a quality experience.',
		},
		{
			title: 'Locations',
			mainText:
				'We are currently located in Orange County, covering O’Neill Campground, Lake Perris Campground, Doheny State Beach Campground and many more to come!',
		},
	]

	return (
		<div className={styles.about_page}>
			<div className={styles.about_page_banner}>
				<div className={styles.about_page_mask}></div>
			</div>

			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				className={styles.about_page_main}
			>
				{/* title */}
				<Grid container item justifyContent="center">
					<Typography
						variant="h4"
						className={styles.about_page_main_title}
					>
						Connect With Nature
					</Typography>
				</Grid>

				<Grid container item marginTop="50px" justifyContent="center">
					<Grid item xs={12} lg={6} sx={{ height: '450px' }} className={styles.story_bgc}>
						<div className={styles.brand_bgc}></div>
					</Grid>
					<Grid
						item
						xs={12}
						lg={6}
						sx={{ backgroundColor: '#dfdfdf' }}
					>
						<div className={styles.brand_text}>
							<Typography variant="subtitle2" gutterBottom>
								{brandStory[0].title}
							</Typography>
							{brandStory[0].mainText.map((text, index) => (
								<Typography
									variant="caption"
									gutterBottom
									key={index}
								>
									{text}
								</Typography>
							))}
						</div>
					</Grid>
					<Grid
						item
						lg={6}
						sx={{ backgroundColor: '#dfdfdf'}}
						className={styles.values_text_lg}
					>
						<div className={styles.brand_text}>
							{ourValues.map((item, index) => (
								<React.Fragment key={index}>
									<Typography
										variant="subtitle2"
										gutterBottom
									>
										{item.title}
									</Typography>
									<Typography
										variant="caption"
										gutterBottom
										key={index}
									>
										{item.mainText}
									</Typography>
								</React.Fragment>
							))}
						</div>
					</Grid>
					<Grid item xs={12} lg={6} sx={{ height: '450px' }} className={styles.story_bgc}>
						<div className={styles.values_bgc}></div>
					</Grid>
					<Grid
						item
						xs={12}
						lg={6}
						sx={{ backgroundColor: '#dfdfdf' }}
						className={styles.values_text_xs}
					>
						<div className={styles.brand_text}>
							{ourValues.map((item, index) => (
								<React.Fragment key={index}>
									<Typography
										variant="subtitle2"
										gutterBottom
									>
										{item.title}
									</Typography>
									<Typography
										variant="caption"
										gutterBottom
										key={index}
									>
										{item.mainText}
									</Typography>
								</React.Fragment>
							))}
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default About
