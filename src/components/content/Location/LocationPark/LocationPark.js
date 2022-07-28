import React from 'react'
import styles from './LocationPark.module.less'

const LocationPark = () => {
	const parkList = [
		{
			svgUrl: 'https://wecamped.com/wp-content/uploads/2022/02/open-sign_black.svg',
			content: '7:00 am',
		},
		{
			svgUrl: 'https://wecamped.com/wp-content/uploads/2022/02/closed_black.svg',
			content: '8:00 pm',
		},
		{
			svgUrl: 'https://wecamped.com/wp-content/uploads/2022/02/phone_black.svg',
			content: '(951) 940-5600',
		},
		{
			svgUrl: 'https://wecamped.com/wp-content/uploads/2022/02/map_black.svg',
			content: 'Campground Map',
		},
		{
			svgUrl: 'https://wecamped.com/wp-content/uploads/2022/02/brochure_black.svg',
			content: 'Park Brochure',
		},
	]

	return (
		<>
			<h2>Park Information</h2>
			<div className={styles.park_main}>
				{parkList.map((item, index) => (
					<div className={styles.park_main_item} key={index}>
						<img src={item.svgUrl} alt={item.content} />
						<span>{item.content}</span>
					</div>
				))}
			</div>
		</>
	)
}

export default LocationPark
