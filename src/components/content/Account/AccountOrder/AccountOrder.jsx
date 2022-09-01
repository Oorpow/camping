import { Grid, Typography, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { useGetUserOrderQuery } from '../../../../store/reducers/orderApi'
import styles from './AccountOrder.module.less'

const SubIconItem = (props) => {
	const { title, icon, num } = props

	return (
		<>
			<Typography variant="h6">{title}</Typography>
			<Typography
				variant="body2"
				className={styles.order_item_text_desc_font}
			>
				{icon}{' '}
				<Typography variant="caption" marginLeft="5px">
					{num}
				</Typography>
			</Typography>
		</>
	)
}

const OrderItem = (props) => {
	const { item } = props
	let totalPrice = 0

	if (item.tent.length > 1) {
		totalPrice = item.tent.reduce((prev, next) => {
			return prev.num * prev.price + next.num * next.price
		})
	} else {
		totalPrice = item.tent[0].num * item.tent[0].price
	}
	
	return (
		// 标题
		<>
			<div className={styles.order_title}>
				<Typography variant="h5" className={styles.order_title_main}>Location: {item.location}</Typography>
				<Typography variant="body2">$ {totalPrice}</Typography>
			</div>
			{item.tent.map((sub) => (
				<Grid
					item
					xs={12}
					key={sub._id}
					sx={{
						paddingBottom: '10px',
						borderBottom: '1px solid #ccc',
					}}
				>
					<div className={styles.order_item}>
						{/* 图片 */}
						<div className={styles.order_item_img}>
							<img
								src={process.env.REACT_APP_DEV_URL + sub.src}
								alt={sub.title}
							/>
						</div>
						{/* 文字区域 */}
						<div className={styles.order_item_text}>
							<div className={styles.order_item_text_desc}>
								<SubIconItem
									title={sub.title}
									num={sub.capacity}
									icon={
										<PeopleOutlineIcon
											sx={{
												color: '#374151',
												fontSize: '22px',
											}}
										/>
									}
								/>
							</div>
							{/* 底部时间和联系人 */}
							<div className={styles.order_item_text_detail}>
								<Typography
									variant="body2"
									className={styles.order_item_text_detail_font}
								>
									<AccessTimeIcon
										sx={{
											color: '#374151',
											fontSize: '22px',
										}}
									/>
									<Typography
										variant="caption"
										marginLeft="5px"
									>
										{item.duration.startDate} ~{' '}
										{item.duration.endDate}
									</Typography>
								</Typography>
								<Typography
									variant="caption"
									className={styles.order_item_text_desc_font}
								>
									<PersonOutlineIcon
										sx={{
											color: '#374151',
											fontSize: '22px',
										}}
									/>
									{item.contactInfo.firstName +
										item.contactInfo.lastName}
								</Typography>
							</div>
						</div>
					</div>
				</Grid>
			))}
		</>
	)
}

const AccountOrder = (props) => {
	const { userId } = props
	const { data, isSuccess, isLoading } = useGetUserOrderQuery(userId)

	return (
		<Grid container direction="column">
			{isLoading
				? Array.from(new Array(3)).map((_, index) => (
						<Grid container item key={index}>
							<Grid item xs={12} marginTop="20px">
								<Skeleton
									variant="rectangular"
									height="130px"
								/>
								<Skeleton />
								<Skeleton width="60%" />
							</Grid>
						</Grid>
				  ))
				: data.data.map((item) => (
						<Grid container item key={item._id} rowSpacing={2} marginTop="15px">
							<OrderItem item={item} />
						</Grid>
				  ))}
		</Grid>
	)
}

export default AccountOrder
