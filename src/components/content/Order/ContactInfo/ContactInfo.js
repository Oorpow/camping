import React, { useState, useLayoutEffect, useRef } from 'react'
import {
	Button,
	Box,
	Grid,
} from '@mui/material'
import {
	FormContainer,
	TextFieldElement,
} from 'react-hook-form-mui'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { setContactInfo } from '../../../../store/reducers/orderReducers'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateOrderMutation } from '../../../../store/reducers/orderApi'
import AlertBar from '../../../common/AlertBar/AlertBar'
import { useNavigate } from 'react-router'

const theme = createTheme()

const ContactInfo = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	// 警示框
	const [showAlertType, setShowAlertType] = useState({
		open: false,
		type: 'success',
		message: '',
	})

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const firstUpdate = useRef(true)

	const user = useSelector((state) => state.access)
	const orderState = useSelector((state) => state.order)
	const [formDefaultValues, setFormDefaultValues] = useState({
		firstName: user.info.firstName,
		lastName: user.info.lastName,
		email: user.info.email,
	})
	const [createOrder, _] = useCreateOrderMutation()

	useLayoutEffect(() => {
		const createUserOrder = async () => {
			const res = await createOrder(orderState)
			if (res.data.status === 201) {
				setShowAlertType({
					open: true,
					type: 'success',
					message: res.data.message
				})
				setTimeout(() => {
					navigate('/account')
				}, 2000)
			} else {
				setShowAlertType({
					open: true,
					type: 'warning',
					message: res.data.message
				})
			}
		}

		// 仅更新时调用，首次渲染不起作用
		if (firstUpdate.current) {
			firstUpdate.current = false
			return
		} else {
			try {
				createUserOrder()
			} catch (error) {
				setShowAlertType({
					open: true,
					type: 'warning',
					message: error
				})
			}
		}
	}, [orderState])

	// 提交表单
	const handleSubmit = (data) => {
		dispatch(setContactInfo(data))
	}

	return (
		<ThemeProvider theme={theme}>
			<AlertBar {...showAlertType} />
			<Box
				sx={{
					marginTop: 5,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<AlertBar {...showAlertType} />

				<FormContainer
					defaultValues={formDefaultValues}
					onSuccess={handleSubmit}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextFieldElement
								id="firstName"
								name="firstName"
								label="First Name"
								autoFocus
								required
								fullWidth
								color="success"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextFieldElement
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								color="success"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextFieldElement
								type="email"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								validation={{ pattern: emailRegex }}
								color="success"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						color="success"
					>
						Submit
					</Button>
				</FormContainer>
			</Box>
		</ThemeProvider>
	)
}

export default ContactInfo
