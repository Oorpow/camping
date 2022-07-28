import React from 'react'
import { CardActionArea, CardMedia, CardContent, Card, Grid, Typography } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import styles from './Browse.module.less'

const Browse = () => {
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
		<Grid container direction="column" margin="100px auto">
			<Grid item xs>
				<h1>Browse Our Tents</h1>
			</Grid>
			<Grid
				container
				item
				justifyContent="space-between"
				rowSpacing={3}
				columnSpacing={2}
			>
				{tentsList.map((item) => (
					<Grid
						item
						sm={12}
						md={6}
						lg={3}
						className={styles.card}
						key={item.src}
					>
						<Card
							sx={{
								maxWidth: 600,
								boxShadow: '0 0 10px 0 rgb(0 0 0 / 15%)',
							}}
							variant="outlined"
						>
							<CardActionArea>
								<CardMedia
									component="img"
									height="200"
									image={item.src}
									alt={item.title}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h6"
										component="div"
									>
										{item.title}
									</Typography>
									<div className={styles.guests}>
										<PersonOutlineOutlinedIcon
											sx={{ fontSize: 20 }}
										/>
										<span>{item.capacity} Guests</span>
									</div>
									<div className={styles.price}>
										<span>${item.price} </span>
										/night
									</div>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}

export default Browse
