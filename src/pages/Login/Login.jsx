import React, { useState } from 'react'
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Paper,
	Box,
	Grid,
	Typography,
} from '@mui/material'
import { message } from 'antd'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../store/reducers/userReducers'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../store/reducers/accessReducers'
import styles from './Login.module.less'

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © Oorpow '}
			{/* <Link color="inherit" href="https://mui.com/">
				Oorpow
			</Link>{' '} */}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const theme = createTheme()

export default function Login() {
	const navigate = useNavigate()
	const [login, _] = useLoginMutation()
	const dispatch = useDispatch()

	// 提交登录信息
	const handleSubmit = async (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		try {
			// 登录
			const result = await login({
				email: data.get('email'),
				password: data.get('password'),
			})
			if (result.data.status === 200) {
				// 状态持久化
				dispatch(
					setUserInfo({
						token: result.data.token,
						info: result.data.data,
					})
				)
				navigate('/home', { replace: true })
			} else {
				message.warn(result.data.message)
			}
		} catch (error) {
			message.warn(error)
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				{/* background image */}
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					className={styles.login_background}
				/>

				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						{/* form */}
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								autoComplete="current-password"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item>
									<NavLink to="/register">
										{"Don't have an account? Sign Up"}
									</NavLink>
									{/* <Link href="#" variant="body2">
										{"Don't have an account? Sign Up"}
									</Link> */}
								</Grid>
							</Grid>
							<Copyright sx={{ mt: 5 }} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}
