import React, { useState } from 'react'
import {
	Button,
	CssBaseline,
	TextField,
	Box,
	Grid,
	Typography,
	Container,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { setContactInfo } from '../../../../store/reducers/orderReducers'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateOrderMutation } from '../../../../store/reducers/orderApi'
import AlertBar from '../../../common/AlertBar/AlertBar'
import { useNavigate } from 'react-router'

const theme = createTheme()

const ContactInfo = () => {
	const navigate = useNavigate()
	// 警示框
	const [showAlertType, setShowAlertType] = useState({
		open: false,
		type: 'success',
		message: '',
	})
	const orderState = useSelector((state) => state.order)
	const dispatch = useDispatch()
	const [createOrder, _] = useCreateOrderMutation()

	// 提交表单
	const handleSubmit = async (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		dispatch(
			setContactInfo({
				firstName: data.get('firstName'),
				lastName: data.get('lastName'),
				email: data.get('email'),
			})
		)

		try {
			const res = await createOrder(orderState)
			if (res.data.status === 201) {
				setShowAlertType({
					open: true,
					type: 'success',
					message: res.data.message,
				})
				setTimeout(() => {
					navigate('/account')
				}, 2000);
			} else {
				setShowAlertType({
					open: true,
					type: 'warning',
					message: res.data.message,
				})
			}
		} catch(error) {
			setShowAlertType({
				open: true,
				type: 'warning',
				message: error
			})
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<AlertBar {...showAlertType} />
			<Container component="main" maxWidth="xs">
				{/* <CssBaseline /> */}
				<Box
					sx={{
						marginTop: 3,
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Typography component="h1" variant="h5">
						Submit
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									color="success"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									color="success"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									color="success"
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 3 }}
							style={{ backgroundColor: '#047469' }}
						>
							get your quote
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default ContactInfo
