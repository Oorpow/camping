import React, { useState } from 'react'
import {
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
	Grid,
	Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from '../../../../store/reducers/orderReducers'

const Destination = () => {
	const [value, setValue] = useState('Lake Perris Recreation Area')
	const dispatch = useDispatch()

	const handleChange = (event) => {
		setValue(event.target.value)
		dispatch(setLocation(event.target.value))
	}

	return (
		<Grid item p={2} marginTop="30px">
			<Typography variant="h5" component="div" fontWeight="500">
				Locations <span style={{ color: 'red' }}>*</span>
			</Typography>
			<FormControl style={{width: '100%', marginTop: '20px'}} required>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					value={value}
					onChange={handleChange}
				>
					<FormControlLabel
						value="Lake Perris Recreation Area"
						control={<Radio color="success" />}
						label="Lake Perris Recreation Area"
                        style={{display: 'flex', flexDirection: "row-reverse", justifyContent: "space-between" , margin: '0'}}
					/>
					<FormControlLabel
						value="O'Neill Regional Park"
						control={<Radio color="success" />}
						label="O'Neill Regional Park"
                        style={{display: 'flex', flexDirection: "row-reverse", justifyContent: "space-between", margin: '0'}}
					/>
				</RadioGroup>
			</FormControl>
		</Grid>
	)
}

export default Destination
