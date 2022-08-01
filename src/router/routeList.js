import React, { Suspense } from 'react'
import { useRoutes } from 'react-router'
import Loading from '../components/common/Loading/Loading'
import router from './index'

// 路由表添加懒加载、重定向
const RouteList = (list) => {
	let routes = []

	list.forEach((route) => {
		// 需要重定向的页面
		if (route.index) {
			routes.push({
				path: '/',
				element: route.element
			})
		} else {
			routes.push({
				path: route.path,
				element: (
					<Suspense fallback={<Loading />}>
						<route.element />
					</Suspense>
				),
				children: route.children && RouteList(route.children)
			})
		}
	})

	return routes
}

const SyncRouter = () => useRoutes(RouteList(router))

export default SyncRouter
