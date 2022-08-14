import {
	Grid,
	Stepper,
	Typography,
	Step,
	StepLabel,
	Box,
	IconButton,
} from '@mui/material'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import React, { lazy, Suspense, useEffect } from 'react'
import styles from './Order.module.less'
import Loading from '../../components/common/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { setUserId } from '../../store/reducers/orderReducers'

const Destination = lazy(() =>
	import('../../components/content/Order/Destination/Destination')
)
const ChooseDates = lazy(() =>
	import('../../components/content/Order/ChooseDates/ChooseDates')
)
const ChooseTent = lazy(() =>
	import('../../components/content/Order/ChooseTent/ChooseTent')
)
const OrderReview = lazy(() =>
	import('../../components/content/Order/OrderReview/OrderReview')
)
const ContactInfo = lazy(() =>
	import('../../components/content/Order/ContactInfo/ContactInfo')
)

// 步骤条
function HorizontalLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0)
	const [skipped, setSkipped] = React.useState(new Set())

	const isStepSkipped = (step) => {
		return skipped.has(step)
	}

	const handleNext = () => {
		let newSkipped = skipped
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values())
			newSkipped.delete(activeStep)
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped(newSkipped)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	// 不同步骤显示的组件
	const StepComponent = () => {
		switch (activeStep) {
			case 0:
				return (
					<Suspense fallback={<Loading />}>
						<Destination />
					</Suspense>
				)
			case 1:
				return (
					<Suspense fallback={<Loading />}>
						<ChooseTent />
					</Suspense>
				)
			case 2:
				return (
					<Suspense fallback={<Loading />}>
						<ChooseDates />
					</Suspense>
				)
			case 3:
				return (
					<Suspense fallback={<Loading />}>
						<OrderReview />
					</Suspense>
				)
			case 4:
				return (
					<Suspense fallback={<Loading />}>
						<ContactInfo />
					</Suspense>
				)
			default:
				return (
					<Suspense fallback={<Loading />}>
						<Destination />
					</Suspense>
				)
		}
	}

	return (
		<Box sx={{ width: '500px' }}>
			<div className={styles.step_main}>
				<div className={styles.step_button_prev}>
					<IconButton
						color="success"
						disabled={activeStep === 0}
						onClick={handleBack}
						sx={{ mr: 1 }}
					>
						<ArrowBackIosNewRoundedIcon />
					</IconButton>
				</div>
				<Stepper
					activeStep={activeStep}
					sx={{
						width: '70%',
						margin: 'auto',
						'& .MuiStepIcon-root.Mui-active': { color: '#047469' },
						'& .MuiStepIcon-root.Mui-completed': {
							color: '#047469',
						},
					}}
				>
					{Array.from(new Array(5)).map((_, index) => {
						const stepProps = {}
						if (isStepSkipped(index)) {
							stepProps.completed = false
						}
						return (
							<Step key={index} {...stepProps}>
								<StepLabel></StepLabel>
							</Step>
						)
					})}
				</Stepper>
				<div className={styles.step_button_next}>
					<IconButton
						color="success"
						onClick={handleNext}
						disabled={activeStep === 4}
					>
						<ArrowForwardIosRoundedIcon />
					</IconButton>
				</div>
			</div>
			{/* 不同步骤的组件 */}
			<StepComponent />
		</Box>
	)
}

const Order = () => {
	const userState = useSelector(state => state.access)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setUserId(userState.info._id))
	}, [])

	return (
		<div className={styles.order_page}>
			<Grid
				container
				direction="column"
				alignItems="center"
				margin="30px 0"
			>
				<Grid item>
					<Typography
						variant="h4"
						component="div"
						fontWeight="500"
						color="#335d65"
					>
						PLAN YOUR TRIP
					</Typography>
				</Grid>

				<Grid
					container
					item
					direction="column"
					alignItems="center"
					margin="50px 0"
				>
					<Grid
						item
						md={10}
						border="1px solid rgba(63,66,71,.3)"
						borderRadius="10px"
						p={2}
                        sx={{backgroundColor: 'white'}}
					>
						<HorizontalLinearStepper />
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Order
