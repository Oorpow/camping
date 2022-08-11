import React from 'react'
import { Grid, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import styles from './OrderReview.module.less'

const Locate = () => {
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
						Lake Park
					</Typography>
					<CheckCircleIcon fontSize="small" color="success" />
				</div>
			</Grid>
		</Grid>
	)
}

const SomeTent = () => {
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
			<Grid item>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography variant="subtitle2">
						Lake Park *{' '}
						<span style={{ color: '#047469', fontWeight: '500' }}>
							3
						</span>
					</Typography>
					<Typography
						variant="subtitle1"
						color="#047469"
						fontWeight="500"
					>
						$2000
					</Typography>
				</div>
			</Grid>
		</Grid>
	)
}

const Duration = () => {
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
			<Grid item>
				<div>
					<Typography variant="subtitle2" component="div">
						Start Date
					</Typography>
					<Typography
						variant="body2"
						component="div"
						color="#047469"
						fontWeight="500"
					>
						2022-08-17
					</Typography>
				</div>
				<div>
					<Typography variant="subtitle2" component="div">
						End Date
					</Typography>
					<Typography
						variant="body2"
						component="div"
						color="#047469"
						fontWeight="500"
					>
						2022-08-24
					</Typography>
				</div>
				<div>
					<Typography variant="subtitle2" component="div">
						Total Days
					</Typography>
					<Typography
						variant="body2"
						component="div"
						color="#047469"
						fontWeight="500"
					>
						6
					</Typography>
				</div>
			</Grid>
		</Grid>
	)
}

const OrderReview = () => {
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
				<Locate />
				<SomeTent />
				<Duration />
			</Grid>
		</Grid>
	)
}

export default OrderReview
