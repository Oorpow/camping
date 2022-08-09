import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import CardItem from '../../components/common/CardItem/CardItem'
import styles from './Tents.module.less'
import { useGetTentsQuery } from '../../store/reducers/tentsReducers'

const Tents = () => {
	const { data, isLoading } = useGetTentsQuery()

	return (
		<div className={styles.tents}>
			<div className={styles.tents_banner}>
				<div className={styles.tents_mask}></div>
				<h1>Our Tents</h1>
			</div>
			{/* card */}
			<div className={styles.tents_main}>
				<Grid container className={styles.tents_main_grid} columnSpacing={1}>
					{isLoading
						? Array.from(new Array(5)).map((_, i) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									xl={3}
									marginTop="20px"
									key={i}
									p={2}
								>
									<Skeleton
										variant="rectangular"
										height="200px"
									/>
									<Skeleton />
									<Skeleton width="60%" />
								</Grid>
						  ))
						: data.data.map((item) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									xl={3}
									marginTop="20px"
									key={item.src}
								>
									<CardItem {...item} />
								</Grid>
						  ))}
				</Grid>
			</div>
		</div>
	)
}

export default Tents
