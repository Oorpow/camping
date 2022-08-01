import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const router = [
	{
		path: '/',
		element: lazy(() => import('../components/Layout/Layout')),
		children: [
			{
				index: true,
				element: <Navigate to='/home' />,
			},
			{
				path: 'product',
				element: lazy(() => import('../pages/Product/Product')),
				children: [
					{
						path: ':name',
						element: lazy(() =>
							import('../pages/TentPage/TentPage')
						),
					},
				],
			},
			{
				path: '/home',
				element: lazy(() => import('../pages/Home/Home')),
				meta: {
					title: 'Home'
				}
			},
			{
				path: 'location',
				element: lazy(() => import('../pages/Location/Location')),
				meta: {
					title: 'Location',
				},
			},
			{
				path: 'tents',
				element: lazy(() => import('../pages/Tents/Tents')),
				meta: {
					title: 'Tents',
				},
			},
			{
				path: 'pricing',
				element: lazy(() => import('../pages/Pricing/Pricing')),
				meta: {
					title: 'Pricing',
				},
			},
			{
				path: 'about',
				element: lazy(() => import('../pages/About/About')),
				meta: {
					title: 'About',
				},
			},
		],
	},
	{
		path: '/login',
		element: lazy(() => import('../pages/Login/Login')),
		meta: {
			title: 'Sign In',
			noNeed: true,
		},
	},
	{
		path: '/register',
		element: lazy(() => import('../pages/Register/Register')),
		meta: {
			title: 'Sign Up',
			noNeed: true,
		},
	},
]

export default router
