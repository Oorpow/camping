import React, { useState } from 'react'
import { Grid, Skeleton, Typography } from '@mui/material'
import { InputNumber } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTentsQuery } from '../../../../store/reducers/tentsReducers'
import { setTentInfo } from '../../../../store/reducers/orderReducers'
import styles from './ChooseTent.module.less'

const ChooseTent = () => {
	const { data, isLoading } = useGetTentsQuery()
	const [value, setValue] = useState(0)
	const orderState = useSelector((state) => state.order)
	const dispatch = useDispatch()

	// 整理帐篷的信息
	const combineTentInfo = (num, info) => {
		const tentInfo = { ...info, num }
		return tentInfo
	}

	// 是否已存在帐篷
	const isTentExisted = (_id, currentValue) => {
		if (orderState.length === 0) {
			return false
		}
		const target = orderState.tent.filter((item) => {
			return item._id === _id
		})[0]

		if (target !== undefined) {
			dispatch(setTentInfo({ ...target, num: currentValue }))
			return true
		} else {
			return false
		}
	}

	// 改变步进器
	const changeStep = (currentValue, _, item) => {
		// console.log(currentValue)
		setValue(currentValue)
		const tentInfo = combineTentInfo(currentValue, item)
		// 判断用户的账单里是否已经有同一顶帐篷
		let isExisted = isTentExisted(tentInfo._id, currentValue)
		// 若没有，则可以添加
		if (!isExisted) {
			dispatch(setTentInfo(tentInfo))
		}
	}

	return (
		<Grid container item direction="column" p={2}>
			<Grid item margin="30px 0">
				<Typography variant="h5" component="div" fontWeight="500">
					Tents
				</Typography>
			</Grid>
			<Grid container item columnSpacing={2} rowSpacing={2}>
				{isLoading
					? Array.from(new Array(5)).map((_, i) => (
							<Grid item md={6} key={i}>
								<Skeleton
									variant="rectangular"
									height="100px"
								/>
								<Skeleton />
								<Skeleton width="60%" />
							</Grid>
					  ))
					: data.data.map((item) => (
							<Grid item md={6} key={item._id}>
								<div className={styles.tent_item}>
									<div className={styles.tent_item_img}>
										<img
											src={
												process.env.REACT_APP_DEV_URL +
												item.src
											}
											alt={item.title}
										/>
									</div>
									<div className={styles.tent_item_stepper}>
										<span>{item.title}</span>
										<InputNumber
											min={0}
											max={2}
											defaultValue={value}
											onStep={(step, options) =>
												changeStep(step, options, item)
											}
										/>
									</div>
									<div className={styles.tent_item_detail}>
										<span>
											{item.capacity} person capacity -{' '}
										</span>
										<span>Starting at ${item.price}</span>
									</div>
								</div>
							</Grid>
					  ))}
			</Grid>
		</Grid>
	)
}

export default ChooseTent
