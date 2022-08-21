import React, { useEffect } from 'react'
import {
	Avatar,
	Button,
	CssBaseline,
	Box,
	Grid,
	Typography,
	Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { message } from 'antd'
import {
	FormContainer,
	TextFieldElement,
	PasswordElement,
} from 'react-hook-form-mui'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import {
	useGetAuthCodeQuery,
	useRegisterMutation,
} from '../../store/reducers/userReducers'

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © Oorpow '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

// 验证码
function CodeSvg() {
	const { data, isSuccess, refetch } = useGetAuthCodeQuery()
	const changeCode = () => {
		refetch()
	}

	return (
		isSuccess && (
			<div
				dangerouslySetInnerHTML={{ __html: data }}
				onClick={changeCode}
			></div>
		)
	)
}

const theme = createTheme()

let timer = null

export default function Register() {
	const navigate = useNavigate()

	const formContext = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
	})

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const [registerFn, _] = useRegisterMutation()

	// 清除残留副作用
	useEffect(() => {
		clearInterval(timer)
		return () => clearInterval(timer)
	}, [])

	// 表单提交
	const handleRegiste = async (data) => {
		try {
			const res = await registerFn(data)
			if (res.data.status === 201) {
				message.success(res.data.message)
				setTimeout(() => {
					navigate('/login', { replace: true })
				}, 2000)
			} else {
				message.warn(res.data.message)
			}
		} catch (error) {
			message.warn(error)
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5" gutterBottom>
						Register
					</Typography>
					<FormContainer
						onSuccess={(data) => handleRegiste(data)}
						formContext={formContext}
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
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextFieldElement
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
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
								/>
							</Grid>
							<Grid item xs={8}>
								<TextFieldElement
									required
									fullWidth
									id="verifyCode"
									label="Verify Code"
									name="verifyCode"
								/>
							</Grid>
							<Grid item xs={4}>
								<CodeSvg />
							</Grid>
							<Grid item xs={12}>
								<PasswordElement
									sx={{ width: '100%' }}
									label={'Password'}
									required
									name={'password'}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<NavLink to='/login' variant="body2">
									Already have an account? Sign in
								</NavLink>
							</Grid>
						</Grid>
					</FormContainer>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	)
}
