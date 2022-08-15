import React, { useState, useEffect } from 'react'
import { Grid, Box, Button } from '@mui/material'
import {
	FormContainer,
	TextFieldElement,
	PasswordElement,
} from 'react-hook-form-mui'
import styles from './AccountInfo.module.less'
import { useUpdateUserInfoMutation } from '../../../../store/reducers/userReducers'
import AlertBar from '../../../common/AlertBar/AlertBar'

const AccountInfo = (props) => {
	const { userInfo, refetchInfo } = props

	// 警示框
	const [showAlertType, setShowAlertType] = useState({
		open: false,
		type: 'success',
		message: '',
	})

	const [formDefaultValues, setFormDefaultValues] = useState({
		firstName: userInfo.firstName,
		lastName: userInfo.lastName,
		email: userInfo.email,
		password: userInfo.password,
	})

	const [updateUserInfoFn, updateObj] = useUpdateUserInfoMutation()

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	// 更新用户配置
	const updateOptions = async (data) => {
		setFormDefaultValues(data)
		setShowAlertType({
			open: false,
			type: 'success',
			message: '',
		})
		try {
			const res = await updateUserInfoFn({
				...data,
				userId: userInfo._id,
			})
			if (res.data.status === 200) {
				setShowAlertType({
					open: true,
					type: 'success',
					message: res.data.message,
				})
				setTimeout(() => {
					refetchInfo()
				}, 1000)
			} else {
				setShowAlertType({
					open: true,
					type: 'warning',
					message: res.data.message,
				})
			}
		} catch (error) {
			setShowAlertType({
				open: true,
				type: 'error',
				message: error,
			})
		}
	}

	return (
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
				onSuccess={updateOptions}
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
					<Grid item xs={12}>
						<PasswordElement
							sx={{ width: '100%' }}
							label={'Password'}
							required
							name={'password'}
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
					Save Changes
				</Button>
			</FormContainer>
		</Box>
	)
}

export default AccountInfo
