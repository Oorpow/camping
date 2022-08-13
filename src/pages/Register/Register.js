import React, { useState, useEffect } from 'react'
import {
	Avatar,
	Button,
	CssBaseline,
	Link,
	Box,
	Grid,
	Typography,
	Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import AlertBar from '../../components/common/AlertBar/AlertBar'
import {
	useGetAuthCodeMutation,
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
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
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
	const { watch } = formContext
	let emailValue = watch('email')

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const [registerFn, _] = useRegisterMutation()
	const [getCodeFn, codeObj] = useGetAuthCodeMutation()

	// 警示框
	const [showAlertType, setShowAlertType] = useState({
		open: false,
		type: 'success',
		message: '',
	})
	// 倒计时
	const [countDown, setCountDown] = useState(60)
	const [codeEmail, setCodeEmail] = useState('')
	const [isSend, setIsSend] = useState(true)
	const [codeText, setCodeText] = useState('Get Code')

	// 发送验证码，并开启倒计时
	const sendCode = async () => {
		try {
			timer = setInterval(() => setCountDown((t) => --t), 1000)
			setIsSend(true)
			const res = await getCodeFn({ email: codeEmail })
			if (res.data.status === 200) {
				setShowAlertType({
					open: true,
					type: 'success',
					message: res.data.message,
				})
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
				type: 'warning',
				message: error,
			})
		}
	}

	// 表单信息
	useEffect(() => {
		setCodeEmail(emailValue)
	}, [emailValue])

	// 清除残留副作用
	useEffect(() => {
		clearInterval(timer)
		return () => clearInterval(timer)
	}, [])

	// 倒计时60秒区间
	useEffect(() => {
		// 判断是否存在邮箱，若不存在则禁用按钮
		setIsSend(codeEmail === '')
		if (countDown > 0 && countDown < 60) {
			setIsSend(true)
			setCodeText(`${countDown} seconds`)
		} else {
			clearInterval(timer)
			setCountDown(60)
			setCodeText('Get Code')
		}
	}, [countDown, codeEmail])

	// 表单提交
	const handleRegiste = async (data) => {
		setShowAlertType({
			open: false,
			type: 'success',
			message: '',
		})
		try {
			const res = await registerFn(data)
			if (res.data.status === 201) {
				setShowAlertType({
					open: true,
					type: 'success',
					message:
						'registed successfully, and will redirect to login after 2 seconds',
				})
				setTimeout(() => {
					navigate('/login', { replace: true })
				}, 2000)
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
		<ThemeProvider theme={theme}>
			<AlertBar {...showAlertType} />
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
						Sign up
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
							<Grid item xs={7}>
								<TextFieldElement
									required
									fullWidth
									id="verifyCode"
									label="Verify Code"
									name="verifyCode"
								/>
							</Grid>
							<Grid item xs={5}>
								<Button
									variant="contained"
									sx={{ width: '100%', padding: '15px 16px' }}
									disabled={isSend}
									onClick={sendCode}
								>
									{codeText}
								</Button>
							</Grid>
							<Grid item xs={12}>
								<TextFieldElement
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
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
								<Link href="#" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</FormContainer>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	)
}
