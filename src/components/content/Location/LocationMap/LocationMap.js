import React, { useState } from 'react'
import { Map, Marker, InfoWindow } from 'react-amap'

const LocationMap = () => {
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
		<>
			<h2>Location Details</h2>
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
		</>
	)
}

export default LocationMap
