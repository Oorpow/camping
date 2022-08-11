import React from 'react'
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

const theme = createTheme()

const ContactInfo = () => {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email')
        })
	}

	return (
		<ThemeProvider theme={theme}>
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
