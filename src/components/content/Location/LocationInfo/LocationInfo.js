import React from 'react'
import styles from './LocationInfo.module.less'

const LocationInfo = (props) => {
	const { svgUrl, content, title } = props

	return (
		<div className={styles.location_info}>
			<div className={styles.location_info_head}>
				<img src={svgUrl} alt={title} />
				<h2>{title}</h2>
			</div>
			<div className={styles.location_info_content}>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default LocationInfo
