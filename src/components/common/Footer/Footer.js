import { CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './Footer.module.less'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<CssBaseline />
			<div className={styles.footer_background}></div>
			<div className={styles.footer_main}>
				<Grid container margin="20px 0" justifyContent="center">
					<Grid item>
						<Typography variant="body2">Copyright (c) 2022 Oorpow</Typography>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default Footer
