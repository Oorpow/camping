import React from 'react'
import LazyLoad from 'react-lazyload'
import { Grid } from '@mui/material'
import CardItem from '../../components/common/CardItem/CardItem'
import { useGetTentsQuery } from '../../store/reducers/tentsReducers'
import styles from './Tents.module.less'

const Tents = () => {
	const { data, isSuccess } = useGetTentsQuery()

	return (
		<div className={styles.tents}>
			<div className={styles.tents_banner}>
				<div className={styles.tents_mask}></div>
				<h1>Our Tents</h1>
			</div>
			{/* card */}
			<div className={styles.tents_main}>
				<Grid container className={styles.tents_main_grid} columnSpacing={1}>
					{isSuccess && data.data.map((item) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									xl={3}
									marginTop="20px"
									key={item.src}
								>
									<LazyLoad>
										<CardItem {...item} />
									</LazyLoad>
								</Grid>
						  ))}
				</Grid>
			</div>
		</div>
	)
}

export default Tents
