import React from 'react'
import { Grid } from '@mui/material'
import styles from './Works.module.less'

const Works = () => {
	const flowList = [
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/04/sign_up_member.svg',
			firstTitle: 'Sign Up',
			lastTitle: 'For Our Membership',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/04/submit_booking.svg',
			firstTitle: 'Submit A Booking ',
			lastTitle: ' and Receive Approval',
		},
		{
			url: 'https://wecamped.com/wp-content/uploads/2022/04/arrive_camping.svg',
			firstTitle: 'Just Show Up,',
			lastTitle: "We've Got You Covered!",
		},
	]

	return (
		<Grid container justifyContent="center" style={{ marginTop: '30px' }}>
			<Grid item xs={11} md={11.5} lg={9.5} xl={8.3}>
				<h1>How It Works</h1>
			</Grid>
			<Grid
				container
				item
				justifyContent="space-around"
                lg={10}
                xl={9}
			>
				{flowList.map((item, i) => (
					<Grid
						item
						p={3}
						xs={11}
                        md={3.5}
                        xl={3}
                        className={styles.work_item}
						key={i}
					>
						<div className={styles.work_card}>
							<div className={styles.work_card_img}>
								<img src={item.url} alt={item.firstTitle} />
							</div>
							<div className={styles.work_card_text}>
								<h4>
									{item.firstTitle}
									<br />
									{item.lastTitle}
								</h4>
							</div>
						</div>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}

export default Works
