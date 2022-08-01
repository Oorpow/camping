import React from 'react'
import { NavLink, useLocation, useMatch, useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import CardItem from '../../components/common/CardItem/CardItem'
import styles from './TentPage.module.less'
import ProductInfo from '../../components/content/TentPage/ProductInfo/ProductInfo'

const TentPage = () => {
	const location = useLocation()
	const params = useParams()
	// console.log(location, params)

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

				
				{/* 左列 */}
				<Grid
					container
					item
					xs={10}
					sm={10}
					md={10}
					lg={8}
					direction="column"
				>
                    {/* product */}
					<Grid item className={styles.location_lake}>
						<h1 className={styles.location_main_lake_title}>
							Lake Perris Recreation Area
						</h1>
						<div className={styles.location_lake_imgs}>
							{imgList.map((item) => (
								<div
									className={styles.location_lake_imgs_item}
									key={item.id}
								>
									{getDataType(item.img) && (
										<img src={item.img} alt="" />
									)}
									{Array.isArray(item.img) &&
										item.img.map((sub, index) => (
											<img
												src={sub.url}
												key={index}
												alt=""
											/>
										))}
								</div>
							))}
						</div>
						<h5>
							“A sparkling jewel and a land of mystery…” – Lake
							Perris State Recreation Area
						</h5>
					</Grid>
                    
                    {/* includes */}
					<Grid item className={styles.location_park}>
						<ProductInfo title="Includes" />
					</Grid>

                    {/* dimensions */}
                    <Grid item className={styles.location_park}>
						<ProductInfo title="Dimensions" />
					</Grid>

					{/* card */}
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
                        <div className={styles.book_box_info}>
                            <span>Person Capacity: 3</span>
                            <h4>Price Per Night: $230.00</h4>
                        </div>
						<h2>Ready To Book?</h2>
						<NavLink to="/register" className={styles.book_button}>
							Sign Up Here
						</NavLink>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default TentPage
