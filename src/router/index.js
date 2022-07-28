import { lazy } from 'react'

const router = [
	{
		path: '/',
		element: lazy(() => import('../pages/Home/Home')),
	},
	{
		path: '/location',
		element: lazy(() => import('../pages/Location/Location')),
		meta: {
			title: 'Location'
		}
	},
	{
		path: '/tents',
		element: lazy(() => import('../pages/Tents/Tents')),
		meta: {
			title: 'Tents'
		}
	},
	{
		path: '/pricing',
		element: lazy(() => import('../pages/Pricing/Pricing')),
		meta: {
			title: 'Pricing'
		}
	},
	{
		path: '/about',
		element: lazy(() => import('../pages/About/About')),
		meta: {
			title: 'About'
		}
	},
	{
		path: '/login',
		element: lazy(() => import('../pages/Login/Login')),
		meta: {
			title: 'Sign In'
		}
	},
	{
		path: '/register',
		element: lazy(() => import('../pages/Register/Register')),
		meta: {
			title: 'Sign Up'
		}
	},
]

export default router
