import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import { Grid } from '@mui/material'
import styles from './Works.module.less'
import { useGetFlowsQuery } from '../../../../store/reducers/flowsReducer'
import MySkeleton from '../../../common/MySkeleton/MySkeleton'
import { changeSkeleton } from '../../../../utils/changeSkeleton'

const WorkItem = () => {
	const { data, isSuccess } = useGetFlowsQuery()
	const [status, setStatus] = useState('pending')

	return (
		<>
			{isSuccess &&
				data.data.map((item, i) => (
					<Grid
						item
						p={3}
						xs={12}
						md={3.5}
						xl={3.5}
						className={styles.work_item}
						key={i}
					>
						<MySkeleton status={status} />
						{/* card */}
						<div
							className={styles.work_card}
							style={{
								visibility:
									status === 'success' ? 'visible' : 'hidden',
							}}
						>
							<div className={styles.work_card_img}>
								<LazyLoad>
									<img
										src={
											process.env.REACT_APP_DEV_URL +
											item.src
										}
										alt={item.firstTitle}
										onLoad={() =>
											changeSkeleton(
												'success',
												setStatus,
												500
											)
										}
									/>
								</LazyLoad>
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
