import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LazyLoad from 'react-lazyload'
import { Grid, Skeleton } from '@mui/material'
import CardItem from '../../components/common/CardItem/CardItem'
import LocationInfo from '../../components/content/Location/LocationInfo/LocationInfo'
import LocationPark from '../../components/content/Location/LocationPark/LocationPark'
import styles from './Location.module.less'
import { useGetLocationInfoQuery } from '../../store/reducers/locationReducers'
import { useGetTentsQuery } from '../../store/reducers/tentsReducers'
import MySkeleton from '../../components/common/MySkeleton/MySkeleton'
import { changeSkeleton } from '../../utils/changeSkeleton'

// 预订跳转盒子
const BookBox = (props) => {
	const { isLogged } = props

	return (
		<div className={styles.book_box}>
			<h4>Ready To Book?</h4>
			<NavLink
				to={isLogged ? '/tents' : '/register'}
				className={styles.book_button}
			>
				{isLogged ? 'Choose One Tent' : 'Sign Up Here'}
			</NavLink>
		</div>
	)
}

const Location = () => {
	const access = useSelector((state) => state.access)
	const { data, isSuccess } = useGetLocationInfoQuery()
	const tentQuery = useGetTentsQuery()
	const [areaImgs, setAreaImgs] = useState([])

	const combineDataToArray = (arr, frontData, behindData) => {
		const result = []
		result.push(frontData)
		result.push(behindData)
		arr.push(result)
	}

	useEffect(() => {
		// 将areaImgs图片数据格式化
		const formatAreaImgs = (data) => {
			if (isSuccess) {
				const copyImgs = data.data[0].areaImgs.slice(0, 2)
				const lastFourImgs = data.data[0].areaImgs.slice(2)
				combineDataToArray(copyImgs, lastFourImgs[0], lastFourImgs[1])
				combineDataToArray(copyImgs, lastFourImgs[2], lastFourImgs[3])
				setAreaImgs(copyImgs)
			}
		}
		formatAreaImgs(data)
	}, [isSuccess, data])

	const [status, setStatus] = useState('pending')

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
					{/* lake */}
					<Grid item className={styles.location_lake}>
						<h1 className={styles.location_main_lake_title}>
							Lake Perris Recreation Area
						</h1>
						<div className={styles.location_lake_imgs}>
							{isSuccess ? (
								areaImgs.map((item, index) => (
									<div
										className={
											styles.location_lake_imgs_item
										}
										key={index}
									>
										{Array.isArray(item) ? (
											item.map((sub) => (
												<LazyLoad key={sub._id}>
													<img
														src={
															process.env
																.REACT_APP_DEV_URL +
															sub.src
														}
														alt=""
														key={sub._id}
														onLoad={() =>
															changeSkeleton(
																'success',
																setStatus,
																2000
															)
														}
														style={{
															visibility:
																status ===
																'success'
																	? 'visible'
																	: 'hidden',
														}}
													/>
													<Skeleton
														variant="rectangular"
														style={{
															position:
																'absolute',
															inset: 0,
															visibility:
																status ===
																'success'
																	? 'hidden'
																	: 'visible',
														}}
														height="150px"
													/>
												</LazyLoad>
											))
										) : (
											<LazyLoad key={item._id}>
												<Skeleton
													variant="rectangular"
													style={{
														position: 'absolute',
														inset: 0,
														visibility:
															status === 'success'
																? 'hidden'
																: 'visible',
													}}
													height="300px"
												/>
												<img
													src={
														process.env
															.REACT_APP_DEV_URL +
														item.src
													}
													alt=""
													key={item._id}
													onLoad={() =>
														changeSkeleton(
															'success',
															setStatus,
															2000
														)
													}
													style={{
														visibility:
															status === 'success'
																? 'visible'
																: 'hidden',
													}}
												/>
											</LazyLoad>
										)}
									</div>
								))
							) : (
								<Grid container direction="column">
									<Skeleton
										variant="rectangular"
										height="200px"
									/>
									<Skeleton />
									<Skeleton width="60%" />
								</Grid>
							)}
						</div>
						<h5>
							“A sparkling jewel and a land of mystery…” – Lake
							Perris State Recreation Area
						</h5>
					</Grid>

					{/* park */}
					<Grid item className={styles.location_park}>
						{isSuccess && (
							<LazyLoad>
								<LocationPark
									parkInfo={data.data[0].parkInfo}
								/>
							</LazyLoad>
						)}
					</Grid>

					{/* about location & pets */}
					<Grid item>
						{isSuccess ? (
							<LocationInfo
								locateInfo={data.data[0].locationContext}
							/>
						) : (
							<Grid container direction="column">
								<Skeleton
									variant="rectangular"
									height="200px"
								/>
								<Skeleton />
								<Skeleton width="60%" />
							</Grid>
						)}
					</Grid>

					{/* card */}
					<Grid container item direction="column" marginTop="30px">
						<h2>View Our Tents</h2>
						<Grid container item columnSpacing={1}>
							{tentQuery.isSuccess
								? tentQuery.data.data
										.slice(0, 3)
										.map((item) => (
											<Grid
												item
												xs={12}
												sm={6}
												md={4}
												xl={4}
												marginTop="20px"
												key={item.src}
											>
												<LazyLoad>
													<CardItem
														key={item._id}
														{...item}
													/>
												</LazyLoad>
											</Grid>
										))
								: Array.from(new Array(3)).map((_, i) => (
										<div
											style={{
												width: '100%',
												margin: '10px 10px 0 0',
											}}
											key={i}
										>
											<Skeleton
												variant="rectangular"
												height="200px"
											/>
											<Skeleton />
											<Skeleton width="60%" />
										</div>
								  ))}
						</Grid>
					</Grid>

					{/* book in md */}
					<Grid item className={styles.book_main_lg}>
						<BookBox isLogged={access.isLogged} />
					</Grid>
				</Grid>

				{/* 右列 */}
				<Grid item lg={3.5} className={styles.book_main}>
					<BookBox isLogged={access.isLogged} />
				</Grid>
			</Grid>
		</div>
	)
}

export default Location
