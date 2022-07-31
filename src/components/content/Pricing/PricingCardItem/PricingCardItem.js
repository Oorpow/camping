import React from 'react'
import styles from './PricingCardItem.module.less'

const PricingCardItem = (props) => {
    const { url, title, price } = props

	return (
		<div className={styles.pricing_container_item_card}>
			<div className={styles.pricing_container_item_card_img}>
				<img src={url} alt={title} />
			</div>
			<div className={styles.pricing_container_item_card_text}>
				<h4>
					{title}
					<br />
					<span>{price}</span>
				</h4>
			</div>
		</div>
	)
}

export default PricingCardItem
