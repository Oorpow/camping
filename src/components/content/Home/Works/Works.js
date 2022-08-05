import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import styles from './Works.module.less'
import { useGetFlowsQuery } from '../../../../store/reducers/flowsReducer'

const WorkItem = () => {
	const { data, isLoading } = useGetFlowsQuery()

	return (
		<>
			{isLoading
				? Array.from(new Array(3)).map((_, i) => (
						<Grid item p={3} xs={12} md={3.5} xl={3.5} key={i}>
							<Skeleton variant="rectangular" height="300px" />
						</Grid>
				  ))
				: data.data.map((item, i) => (
						<Grid
							item
							p={3}
							xs={12}
							md={3.5}
							xl={3.5}
							className={styles.work_item}
							key={i}
						>
							<div className={styles.work_card}>
								<div className={styles.work_card_img}>
									<img
										src={
											process.env.REACT_APP_DEV_URL +
											item.src
										}
										alt={item.firstTitle}
									/>
								</div>
								<div className={styles.work_card_text}>
									<h4>
										{item.firstTitle}
										<br />
										{item.lastTitle}
									</h4>
								</div>
							</div>
						</Grid>
				  ))}
		</>
	)
}

const Works = () => {
	return (
		<Grid container direction="column" style={{ marginTop: '30px' }}>
			<Grid item xs>
				<h1>How It Works</h1>
			</Grid>
			<Grid container item justifyContent="space-between">
				<WorkItem />
			</Grid>
		</Grid>
	)
}

export default Works
