import { Grid } from '@mui/material'
import { DateRange } from 'react-date-range'
import styles from './ChooseDates.module.less'
import React, { useState } from 'react'

const ChooseDates = () => {
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection',
		},
	])

    const changeDate = (item) => {
        // console.log(item.selection.endDate)
        setState([item.selection])
    }

	return (
		<Grid item p={2} marginTop="30px">
			<DateRange
				editableDateInputs={true}
                onChange={(item) => changeDate(item)}
				moveRangeOnFirstSelection={false}
				ranges={state}
                className={styles.date}
			/>
		</Grid>
	)
}

export default ChooseDates
