import React, { useState } from 'react'
import {
	Box,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { pcaa } from 'area-data'
import { AreaSelect } from 'react-area-linkage'
import 'react-area-linkage/dist/index.css'
import styles from './AccountInfo.module.less'

const AccountInfo = () => {
	const [values, setValues] = useState({
		password: '',
		showPassword: false,
	})
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}

	// 密码可见性
	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		})
	}

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	// 省市区三级联动
	const handleChangeArea = (e) => {
		console.log(e)
	}

	return (
		<Box
			component="form"
			sx={{
				width: '100%',
				'& .MuiTextField-root': { m: 1 },
			}}
			noValidate
			autoComplete="off"
		>
			<div className={styles.form_main}>
				{/* username */}
				<FormControl
					style={{ flexDirection: 'row' }}
					fullWidth
					className={styles.name_main_input}
				>
					<TextField
						label="First Name"
						id="firstName"
						required
						style={{ width: '46%' }}
						color="success"
						className={styles.name_input}
					/>
					<TextField
						label="Last Name"
						id="lastName"
						required
						style={{ width: '50%' }}
						color="success"
						className={styles.name_input}
					/>
				</FormControl>
				{/* email */}
				<FormControl fullWidth>
					<TextField
						label="Email Address"
						id="email"
						required
						color="success"
						className={styles.email_input}
					/>
				</FormControl>
				{/* password */}
				<FormControl fullWidth sx={{ md: {margin: '10px'} }} className={styles.password_main}>
					<InputLabel
						htmlFor="outlined-adornment-password"
						color="success"
					>
						Password
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{values.showPassword ? (
										<VisibilityOff />
									) : (
										<Visibility />
									)}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
						style={{ width: '98%' }}
						color="success"
					/>
				</FormControl>
				{/* address */}
				<FormControl fullWidth>
					<AreaSelect
						type="text"
						level={2}
						defaultArea={['440000', '440300', '440305']}
						data={pcaa}
						onChange={handleChangeArea}
					/>
					<TextField
						id="standard-helperText"
						label="Detailed Address"
						defaultValue="Default Value"
						variant="standard"
						style={{ marginTop: '20px' }}
					/>
				</FormControl>
				{/* save changes */}
				<FormControl style={{ margin: '10px' }}>
					<span className={styles.save_button}>Save Changes</span>
				</FormControl>
			</div>
		</Box>
	)
}

export default AccountInfo
