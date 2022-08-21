import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import styles from './MySkeleton.module.less'

const MySkeleton = (props) => {
    const { status } = props

	return (
		<Grid
			item
			sm={12}
			style={{
				visibility: status === 'success' ? 'hidden' : 'visible',
			}}
			className={styles.skeleton_main}
		>
			<Skeleton variant="rectangular" height="250px" />
			<Skeleton />
			<Skeleton width="60%" />
		</Grid>
	)
}

export default MySkeleton
