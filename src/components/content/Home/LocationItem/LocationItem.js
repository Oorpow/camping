import React, { useState } from 'react'
import { CardActionArea, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Map, Marker, InfoWindow } from 'react-amap'
import styles from './LocationItem.module.less'

const LocationItem = () => {
	// 经纬度
	const [currentPos, setCurrentPos] = useState({
		longitude: 121,
		latitude: 36,
	})
	// 信息窗口可见性
	const [infoVisible, setInfoVisible] = useState(false)

	// 地图配置项
	const plugins = [
		{
			name: 'ToolBar',
			options: {
				visible: true, // 不设置该属性默认就是 true
			},
		},
	]

	const mapEvents = {
		click: (pos) => {
			console.log(pos)
			let { lnglat } = pos
			setCurrentPos({
				longitude: lnglat.lng,
				latitude: lnglat.lat,
			})
			setInfoVisible(true)
		},
	}

	const infoItem = `<div>
        <h4>Lng: ${currentPos.longitude}</h4>
        <h4>Lat: ${currentPos.latitude}</h4>
    </div>`

	return (
		<Grid container direction="column" marginTop="100px">
			<Grid item xs>
				<h1>Our Location</h1>
			</Grid>
			<Grid container item spacing={3}>
				<Grid item xs={12} sm={12} md={6}>
					<Card
						sx={{
							maxWidth: { sm: 800, md: 600 },
							boxShadow: '0 0 10px 0 rgb(0 0 0 / 15%)',
						}}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								height="300"
								image={process.env.REACT_APP_DEV_URL + '/images/home/location/locationImg.jpeg'}
								alt="green iguana"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
								>
									Lake Perris Recreation Area
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} sm={12} md={6} className={styles.map}>
					<Map
						amapkey={'788e08def03f95c670944fe2c78fa76f'}
						plugins={plugins}
						events={mapEvents}
						center={currentPos}
					>
						<Marker
							position={currentPos ? currentPos : null}
							clickable={true}
						/>
						<InfoWindow
							position={currentPos ? currentPos : null}
							isCustom={false}
							visible={infoVisible}
							content={infoItem}
						/>
					</Map>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default LocationItem
