import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { addDays } from 'date-fns'
import { DateRange } from 'react-date-range'
import * as dayjs from 'dayjs'
import { setDurationDate } from '../../../../store/reducers/orderReducers'
import styles from './ChooseDates.module.less'

const ChooseDates = () => {
	const orderDuration = useSelector(state => state.order.duration)
	const [curDate, setCurDate] = useState([
		{
			startDate: new Date(),
			endDate: (orderDuration.endDate && new Date(orderDuration.endDate)) || null,
			key: 'selection',
		},
	])
	const distpach = useDispatch()

	const formatTime = (date) => dayjs(date).format('YYYY-MM-DD')

	const changeDate = (item) => {
		setCurDate([item.selection])
		distpach(
			setDurationDate({
				startDate: formatTime(item.selection.startDate),
				endDate: formatTime(item.selection.endDate),
				totalDate:
					item.selection.endDate.getDate() -
					item.selection.startDate.getDate(),
			})
		)
	}

	return (
		<Grid item p={2} marginTop="30px">
			<DateRange
				onChange={(item) => {
					changeDate(item)
				}}
				moveRangeOnFirstSelection={false}
				ranges={curDate}
				minDate={addDays(new Date(), 0)}
				maxDate={addDays(new Date(), 15)}
				dateDisplayFormat="L d, yyy"
				className={styles.date}
			/>
		</Grid>
	)
}

export default ChooseDates
