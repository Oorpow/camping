import React, { useState, useEffect } from 'react'
import { Alert, Snackbar } from '@mui/material'

const AlertBar = (props) => {
	const { open, type, message } = props
	const [show, setShow] = useState(open)

	useEffect(() => {
        setShow(open)
    }, [open])

	const handleClose = () => {
		setShow(false)
	}

	return (
		<Snackbar
			open={show}
			autoHideDuration={2000}
			onClose={handleClose}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
		>
			<Alert severity={type} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default AlertBar
