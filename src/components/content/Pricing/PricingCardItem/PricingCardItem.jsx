import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import { changeSkeleton } from '../../../../utils/changeSkeleton'
import MySkeleton from '../../../common/MySkeleton/MySkeleton'
import styles from './PricingCardItem.module.less'

const PricingCardItem = (props) => {
	const { src, bigTitle, smallTitle } = props
	const [status, setStatus] = useState('pending')

	return (
		<>
			<MySkeleton status={status} height="150px" />
			<div
				className={styles.pricing_container_item_card}
				style={{
					visibility: status === 'success' ? 'visible' : 'hidden',
				}}
			>
				<div className={styles.pricing_container_item_card_img}>
					<LazyLoad>
						<img
							src={process.env.REACT_APP_DEV_URL + src}
							alt={bigTitle}
							onLoad={() =>
								changeSkeleton('success', setStatus, 1000)
							}
						/>
					</LazyLoad>
				</div>
				<div className={styles.pricing_container_item_card_text}>
					<h4>
						{bigTitle}
						<br />
						<span>{smallTitle}</span>
					</h4>
				</div>
			</div>
		</>
	)
}

export default PricingCardItem
