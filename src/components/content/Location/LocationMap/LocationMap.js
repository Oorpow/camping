import React, { useState } from 'react'
import { Map, Marker, InfoWindow } from 'react-amap'

const LocationMap = () => {
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

	return (
		<>
			<h2>Location Details</h2>
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
		</>
	)
}

export default LocationMap
