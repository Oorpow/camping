import React, { useEffect } from 'react'
import LazyLoad from 'react-lazyload'
import { Grid, Skeleton, Typography } from '@mui/material'
import CardItem from '../../components/common/CardItem/CardItem'
import PricingCardItem from '../../components/content/Pricing/PricingCardItem/PricingCardItem'
import PricingPackage from '../../components/content/Pricing/PricingPackage/PricingPackage'
import { useGetTentsQuery } from '../../store/reducers/tentsReducers'
import {
	useGetPricingIconsQuery,
	useGetPrebuiltQuery,
} from '../../store/reducers/pricingReducers'
import styles from './Pricing.module.less'

const Pricing = () => {
	const prebuilt = useGetPrebuiltQuery()
	const pricingIcons = useGetPricingIconsQuery()
	const tents = useGetTentsQuery()

	return (
		<div className={styles.pricing_page}>
			<Grid container direction="column" className={styles.pricing_main}>
				{/* Pricing */}
				<Grid
					container
					item
					className={styles.pricing_container}
					direction="column"
					alignItems="center"
				>
					<Typography variant="h5" className={styles.commonTitle}>Pricing</Typography>
					<Grid
						container
						item
						spacing={1}
						className={styles.pricing_container_grid}
					>
						{pricingIcons.isLoading
							? Array.from(new Array(4)).map((_, i) => (
									<Grid
										item
										xs={10}
										sm={5}
										md={5}
										lg={3}
										className={
											styles.pricing_container_item
										}
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
							: pricingIcons.data.data.map((item, i) => (
									<Grid
										item
										xs={10}
										sm={5}
										md={5}
										lg={3}
										className={
											styles.pricing_container_item
										}
										key={i}
									>
										<LazyLoad>
											<PricingCardItem {...item} />
										</LazyLoad>
									</Grid>
							  ))}
					</Grid>
				</Grid>

				{/* package pricing */}
				<Grid
					container
					item
					direction="column"
					className={styles.package_grid}
					alignItems="center"
				>
					<Typography variant="h5" className={styles.commonTitle}>Prebuilt Package Pricing</Typography>
					<Grid container item spacing={1} justifyContent="center">
						{prebuilt.isLoading
							? Array.from(new Array(2)).map((_, i) => (
									<Grid
										item
										xs={10}
										lg={6}
										className={styles.package_grid_item}
										key={i}
									>
										<Skeleton
											variant="rectangular"
											height="400px"
										/>
										<Skeleton />
										<Skeleton width="60%" />
									</Grid>
							  ))
							: prebuilt.data.data.map((item, i) => (
									<Grid
										item
										xs={10}
										lg={6}
										className={styles.package_grid_item}
										key={item._id}
									>
										<PricingPackage {...item} />
									</Grid>
							  ))}
					</Grid>
				</Grid>

				{/* tent pricing */}
				<Grid
					container
					item
					direction="column"
					className={styles.tent_grid}
				>
					<Typography variant="h5" className={styles.commonTitle}>Tent Pricing</Typography>
					<Grid
						container
						item
						rowSpacing={3}
						columnSpacing={2}
						className={styles.tent_grid_card_main}
					>
						{tents.isLoading
							? Array.from(new Array(5)).map((_, i) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={6}
										lg={4}
										xl={3}
										marginTop="20px"
										key={i}
									>
										<Skeleton
											variant="rectangular"
											height="300px"
										/>
										<Skeleton />
										<Skeleton width="60%" />
									</Grid>
							  ))
							: tents.data.data.map((item) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={6}
										lg={4}
										xl={3}
										marginTop="20px"
										key={item.src}
									>
										<CardItem {...item} />
									</Grid>
							  ))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Pricing
