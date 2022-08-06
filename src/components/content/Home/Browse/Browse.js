import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import styles from './Browse.module.less'
import CardItem from '../../../common/CardItem/CardItem'
import { useGetTentsQuery } from '../../../../store/reducers/tentsReducers'

const Browse = () => {
	const { data, isSuccess, isLoading } = useGetTentsQuery()

	return (
		<Grid container direction="column" margin="100px auto">
			<Grid item xs>
				<h1>Browse Our Tents</h1>
			</Grid>
			<Grid
				container
				item
				justifyContent="space-between"
				rowSpacing={3}
				columnSpacing={2}
			>
				{isLoading
					? Array.from(new Array(5)).map((_, i) => (
							<Grid
								item
								sm={12}
								md={6}
								lg={3}
								className={styles.card}
								key={i}
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
								sm={12}
								md={6}
								lg={3}
								className={styles.card}
								key={item.src}
							>
								<CardItem {...item} />
							</Grid>
					  ))}
			</Grid>
		</Grid>
	)
}

export default Browse
