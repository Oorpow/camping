import React from 'react'
import LazyLoad from 'react-lazyload'
import { Grid, Skeleton } from '@mui/material'
import CardItem from '../../../common/CardItem/CardItem'
import { useGetTentsQuery } from '../../../../store/reducers/tentsReducers'
import styles from './Browse.module.less'

const Browse = () => {
	const { data, isSuccess } = useGetTentsQuery()

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
				{isSuccess &&
					data.data.map((item) => (
						<Grid
							item
							sm={12}
							md={6}
							lg={3}
							className={styles.card}
							key={item.src}
						>
							<LazyLoad>
								<CardItem {...item} />
							</LazyLoad>
						</Grid>
					))}
			</Grid>
		</Grid>
	)
}

export default Browse
