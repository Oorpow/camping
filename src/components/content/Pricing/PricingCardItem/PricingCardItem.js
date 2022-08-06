import React from 'react'
import styles from './PricingCardItem.module.less'

const PricingCardItem = (props) => {
    const { src, bigTitle, smallTitle } = props

	return (
		<div className={styles.pricing_container_item_card}>
			<div className={styles.pricing_container_item_card_img}>
				<img src={process.env.REACT_APP_DEV_URL + src} alt={bigTitle} />
			</div>
			<div className={styles.pricing_container_item_card_text}>
				<h4>
					{bigTitle}
					<br />
					<span>{smallTitle}</span>
				</h4>
			</div>
		</div>
	)
}

export default PricingCardItem
