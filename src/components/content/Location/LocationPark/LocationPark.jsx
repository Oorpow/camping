import React from 'react'
import styles from './LocationPark.module.less'

const LocationPark = (props) => {
	const { parkInfo } = props

	return (
		<>
			<h2>Park Information</h2>
			<div className={styles.park_main}>
				
				{parkInfo && parkInfo.map((item, index) => (
					<div className={styles.park_main_item} key={item._id}>
						<img src={process.env.REACT_APP_DEV_URL + item.icon} alt={item.content} />
						<span>{item.content}</span>
					</div>
				))}
			</div>
		</>
	)
}

export default LocationPark
