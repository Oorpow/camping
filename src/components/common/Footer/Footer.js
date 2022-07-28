import { Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.less'

const Footer = () => {
	const footerList = [
		{
			mainTitle: 'Go Camping',
			subTitle: [
				{
					path: '/tents',
					title: 'Our Tents',
				},
				{
					path: '/location',
					title: 'Our Locations',
				},
			],
		},
		{
			mainTitle: 'Helpful Links',
			subTitle: [
				{
					path: '/pricing',
					title: 'Pricing',
				},
				{
					path: '/about',
					title: 'About Us',
				},
				{
					path: '/',
					title: 'Contact Us',
				},
			],
		},
	]

	return (
		<div className={styles.footer}>
			<div className={styles.footer_background}></div>
			<div className={styles.footer_main}>
				<Grid container margin="20px 0" justifyContent="center">
					<Grid
						item
						xs={12}
						lg={3}
                        className={styles.footer_main_brand}
					>
						<h3>What about us ?</h3>
						<p className={styles.footer_main_brand_info}>
							At WeCamped you don't lift a finger.
							<br />
							We deliver, setup, teardown, even clean up
							<br />
							for a complete and total stress-free camping
							experience!
						</p>
					</Grid>
					{footerList.map((item, index) => (
						<Grid
							item
							className={styles.footer_list}
							key={index}
                            xs={5}
                            sm={3}
                            lg={2}
						>
							<ul>
								<li>
									<h3>{item.mainTitle}</h3>
								</li>
								{item.subTitle.map((sub) => (
									<li key={sub.path}>
										<NavLink to={sub.path}>
											{sub.title}
										</NavLink>
									</li>
								))}
							</ul>
						</Grid>
					))}
					<Grid item xs={10} sm={4} lg={3} className={styles.footer_main_signup}>
						<h3>Sign Up For A Newsletter</h3>
						<p className={styles.footer_main_brand_info}>
							Gain access to news on our new tents, new locations,
							coupons, and camping articles by signing up.
						</p>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default Footer
