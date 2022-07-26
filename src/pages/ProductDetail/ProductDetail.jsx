import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import { Grid, Typography, Skeleton } from '@mui/material'
import { Carousel, Image } from 'antd'
import { useNavigate, useParams } from 'react-router'
import CardItem from '../../components/common/CardItem/CardItem'
import { useGetProductByTypeQuery } from '../../store/reducers/productReducers'
import { useGetTentsQuery } from '../../store/reducers/tentsReducers'
import styles from './ProductDetail.module.less'
import { changeSkeleton } from '../../utils/changeSkeleton'
import MySkeleton from '../../components/common/MySkeleton/MySkeleton'

const ProductDetail = () => {
	const { name } = useParams()
	const { data, isSuccess, isLoading } = useGetProductByTypeQuery(name)
	const tentData = useGetTentsQuery()
	const navigate = useNavigate()

	// 跳转至预订页
	const handleNavToBook = () => {
		navigate('/order')
	}

	const [status, setStatus] = useState('pending')

	return (
		<div className={styles.detail_page}>
			<Grid container direction="column">
				<Grid
					container
					item
					direction="row"
					className={styles.detail_page_left}
				>
					{/* 左列 */}
					<Grid container item direction="column" md={6}>
						{/* detail info */}
						<Grid
							container
							item
							direction="column"
							className={styles.detail_page_left_info}
						>
							{/* 标题 */}
							<Typography
								variant="h4"
								fontWeight="600"
								gutterBottom
								color="#335D65"
							>
								{isSuccess && data.data[0].productType}
							</Typography>
							{/* 详情 */}
							<Grid container item rowSpacing={2}>
								{isLoading ? (
									<Grid item xs={6} sm={4} md={10}>
										<Skeleton
											variant="rectangular"
											height="130px"
										/>
										<Skeleton />
										<Skeleton width="60%" />
									</Grid>
								) : (
									data.data[0].productInfo.map((item) => (
										<Grid
											item
											xs={6}
											sm={4}
											md={6}
											sx={{
												display: 'flex',
												alignItems: 'center',
											}}
											key={item._id}
										>
											<LazyLoad>
												<img
													src={
														process.env
															.REACT_APP_DEV_URL +
														item.icon
													}
													width="30"
													height="30"
													alt=""
												/>
											</LazyLoad>

											<Typography
												variant="caption"
												component="span"
												marginLeft="5px"
											>
												{item.content}
											</Typography>
										</Grid>
									))
								)}
							</Grid>
						</Grid>
						{/* description */}
						<Grid item marginTop="30px">
							<Typography
								variant="h5"
								gutterBottom
								color="#335D65"
							>
								Description
							</Typography>
							<Typography variant="caption" display="block">
								{isSuccess && data.data[0].productDesc.capacity}{' '}
								Person Capacity
							</Typography>
							<Typography variant="caption" display="block">
								Tent Size:{' '}
								{isSuccess && data.data[0].productDesc.size}{' '}
								square feet
							</Typography>
							<Typography variant="caption" display="block">
								Tent Measurement:{' '}
								{isSuccess &&
									data.data[0].productDesc.measurement.L}{' '}
								ft (L) x{' '}
								{isSuccess &&
									data.data[0].productDesc.measurement.W}{' '}
								ft (W) x{' '}
								{isSuccess &&
									data.data[0].productDesc.measurement.H}{' '}
								in (H){' '}
							</Typography>
						</Grid>
						{/* 按钮 */}
						<div className={styles.book_btn}>
							<div
								className={styles.book_btn_inner}
								onClick={handleNavToBook}
							>
								<span>start booking</span>
								<div className={styles.book_btn_inner_arrow}>
									<LazyLoad>
										<img
											src={
												process.env.REACT_APP_DEV_URL +
												'/images/icons/triangle.svg'
											}
											width="6"
											height="6"
										/>
									</LazyLoad>
								</div>
							</div>
							<div className={styles.book_btn_dot}>
								<LazyLoad>
									<img
										src={
											process.env.REACT_APP_DEV_URL +
											'/images/icons/circle.svg'
										}
										width="6"
										height="6"
									/>
								</LazyLoad>
							</div>
						</div>
					</Grid>
					{/* 轮播图 */}
					<Grid item xs={12} md={6} position="relative">
						<Skeleton
							variant="rectangular"
							height="400px"
							style={{
								position: 'absolute',
								inset: 0,
								visibility:
									status === 'success' ? 'hidden' : 'visible',
							}}
						></Skeleton>
						<Carousel
							effect="fade"
							autoplay
							style={{
								visibility:
									status === 'success' ? 'visible' : 'hidden',
							}}
						>
							{isSuccess &&
								data.data[0].productImgs.map((item) => (
									<div
										className={styles.carousel_img}
										key={item._id}
									>
										<LazyLoad>
											<Image
												src={
													process.env
														.REACT_APP_DEV_URL +
													item.src
												}
												onLoad={() =>
													changeSkeleton(
														'success',
														setStatus,
														2000
													)
												}
												style={{
													width: '100%',
													height: '100%',
													borderRadius: '6px',
													objectFit: 'cover',
												}}
											/>
										</LazyLoad>
									</div>
								))}
						</Carousel>
					</Grid>
				</Grid>

				{/* tent collection */}
				<Grid
					container
					item
					direcction="column"
					justifyContent="center"
					marginTop="100px"
				>
					<Typography
						variant="h5"
						gutterBottom
						className={styles.tent_title}
					>
						OUR TENT COLLECTION
					</Typography>
					<Grid container item columnSpacing={1}>
						{tentData.isSuccess &&
							tentData.data.data.map((item) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									xl={3}
									marginTop="20px"
									key={item.src}
								>
									<LazyLoad>
										<CardItem {...item} />
									</LazyLoad>
								</Grid>
							))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default ProductDetail
