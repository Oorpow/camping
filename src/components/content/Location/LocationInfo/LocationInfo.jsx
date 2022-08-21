import React from 'react'
import styles from './LocationInfo.module.less'

const LocationInfo = (props) => {
	const { locateInfo } = props

	return locateInfo.map((item) => (
		<div className={styles.location_info} key={item._id}>
			<div className={styles.location_info_head}>
				<h2>{item.title}</h2>
			</div>
			<div className={styles.location_info_content}>
				<p>{item.content}</p>
			</div>
		</div>
	))
}

export default LocationInfo
