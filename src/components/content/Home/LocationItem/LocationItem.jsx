import React, { useState } from 'react'
import {
	CardActionArea,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Skeleton,
} from '@mui/material'
import LazyLoad from 'react-lazyload'
import { Map, Marker, InfoWindow } from 'react-amap'
import { useNavigate } from 'react-router'
import MySkeleton from '../../../common/MySkeleton/MySkeleton'
import styles from './LocationItem.module.less'
import { changeSkeleton } from '../../../../utils/changeSkeleton'

const LocationItem = () => {
	// 经纬度
	const [currentPos, setCurrentPos] = useState({
		longitude: 118.026331,
		latitude: 30.855665,
	})
	// 信息窗口可见性
	const [infoVisible, setInfoVisible] = useState(true)
	// 地图配置项
	const plugins = [
		{
			name: 'ToolBar',
			options: {
				visible: true, // 不设置该属性默认就是 true
			},
		},
	]
	// 信息窗体
	const infoItem = `<div>
        <h5>Phoenix Mountain Forest Park</h5>
		<small>Lng: ${currentPos.longitude}</small>
		<br />
		<small>Ltd: ${currentPos.latitude}</small>
    </div>`

	const navigate = useNavigate()

	const navToLocation = () => {
		navigate('/location')
	}

	const [status, setStatus] = useState('pending')
	const changeSkeletonStatus = (status) => {
		setTimeout(() => {
			setStatus(status)
		}, 500)
	}

	return (
		<Grid container direction="column" marginTop="100px">
			<Grid item xs>
				<h1>Our Location</h1>
			</Grid>
			<Grid container item spacing={3}>
				<Grid item xs={12} sm={12} md={6} position="relative">
					<Card
						sx={{
							maxWidth: { sm: 800, md: 600 },
							boxShadow: '0 0 10px 0 rgb(0 0 0 / 15%)',
						}}
						onClick={navToLocation}
						style={{
							visibility:
								status === 'success' ? 'visible' : 'hidden',
						}}
					>
						<CardActionArea>
							<LazyLoad>
								<CardMedia
									component="img"
									height="300"
									image={
										process.env.REACT_APP_DEV_URL +
										'/images/home/location/locationImg.jpeg'
									}
									alt="green iguana"
									onLoad={() =>
										changeSkeleton(
											'success',
											setStatus,
											1000
										)
									}
								/>
							</LazyLoad>
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
					<div
						style={{
							position: 'absolute',
							inset: 0,
							left: '24px',
							top: '24px',
							visibility:
								status === 'success' ? 'hidden' : 'visible',
						}}
					>
						<Skeleton variant="rectangular" height="300px" />
						<Skeleton />
						<Skeleton width="60%" />
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} className={styles.map}>
					<Map
						amapkey={'788e08def03f95c670944fe2c78fa76f'}
						plugins={plugins}
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
