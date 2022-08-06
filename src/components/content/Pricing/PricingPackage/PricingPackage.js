import React from 'react'
import styles from './PricingPackage.module.less'

const PricingPackage = (props) => {
	const { src, title, list } = props

	return (
		<div className={styles.pricing_container_item_card}>
			<div className={styles.pricing_container_item_card_img}>
				<img src={process.env.REACT_APP_DEV_URL + src} alt={title} />
			</div>
			<div className={styles.pricing_container_item_card_text}>
				<h2>{title}</h2>
				<ul>
					{list.map((item, i) => (
						<li key={item._id}>
							<span>{item.content}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PricingPackage
