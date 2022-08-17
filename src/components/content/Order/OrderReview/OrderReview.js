import React from 'react'
import { Grid, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import styles from './OrderReview.module.less'
import { useSelector } from 'react-redux'

const Locate = (props) => {
	const { location } = props

	return (
		<Grid container item direction="column">
			<Grid item>
				<div className={styles.title_flex}>
					<NearMeOutlinedIcon />
					<Typography variant="h6" component="div" marginLeft="5px">
						Location
					</Typography>
				</div>
			</Grid>
			<Grid item>
				<div className={styles.location_line}>
					<Typography
						variant="subtitle2"
						component="div"
						color="#047469"
					>
						{location}
					</Typography>
					<CheckCircleIcon fontSize="small" color="success" />
				</div>
			</Grid>
		</Grid>
	)
}

const SomeTent = (props) => {
	const { tentList, totalDate } = props

	return (
		<Grid container item direction="column" margin="20px 0">
			<Grid item>
				<div className={styles.title_flex}>
					<DeckOutlinedIcon />
					<Typography variant="h6" component="div" marginLeft="5px">
						Tent
					</Typography>
				</div>
			</Grid>
			{tentList.length > 0 ? (
				tentList.map((item) => (
					<Grid item key={item._id}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Typography variant="subtitle2">
								{item.title} *{' '}
								<span
									style={{
										color: '#047469',
										fontWeight: '500',
									}}
								>
									{item.num}
								</span>
							</Typography>
							<Typography
								variant="subtitle1"
								color="#047469"
								fontWeight="500"
							>
								$ {item.price * totalDate}
							</Typography>
						</div>
					</Grid>
				))
			) : (
				<Grid item>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Typography variant="subtitle2">
							It seems you don't book any tent, please choose a
							tent first!
						</Typography>
					</div>
				</Grid>
			)}
		</Grid>
	)
}

const Duration = (props) => {
	const { bookDates } = props

	return (
		<Grid container item direction="column">
			<Grid item>
				<div className={styles.title_flex}>
					<CalendarMonthOutlinedIcon />
					<Typography variant="h6" component="div" marginLeft="5px">
						Dates
					</Typography>
				</div>
			</Grid>
			<Grid container item direction="column" rowSpacing={1}>
				<Grid item>
					<Typography variant="subtitle2" component="div">
						Start Date
					</Typography>
					<Typography
						variant="body2"
						component="div"
						color="#047469"
						fontWeight="500"
					>
						{bookDates.startDate || 'please choose the start date'}
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="subtitle2" component="div">
						End Date
					</Typography>
					<Typography
						variant="body2"
						component="div"
						color="#047469"
						fontWeight="500"
					>
						{bookDates.endDate || 'please choose the end date'}
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="subtitle2" component="div">
						Total Days
					</Typography>
					<Typography
						variant="body2"
						component="div"
						color="#047469"
						fontWeight="500"
					>
						{bookDates.totalDate || 'You need to book the date'}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

const OrderReview = () => {
	const orderState = useSelector((state) => state.order)

	return (
		<Grid container item direction="column" p={2}>
			<Grid item>
				<Typography variant="h5" component="div" fontWeight="500">
					Review
				</Typography>
				<Typography variant="body1" component="div">
					Does everything look right?
				</Typography>
			</Grid>
			<Grid container item direction="column" marginTop="10px">
				<Locate location={orderState.location} />
				<SomeTent
					tentList={orderState.tent}
					totalDate={orderState.duration.totalDate}
				/>
				<Duration bookDates={orderState.duration} />
			</Grid>
		</Grid>
	)
}

export default OrderReview
