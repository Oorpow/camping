import Layout from '../components/Layout/Layout'
import store from '../store'

const router = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'home',
				component: () => import('../pages/Home/Home'),
				meta: {
					title: 'Home',
				},
			},
			{
				path: 'product',
				component: () => import('../pages/Product/Product'),
				children: [
					{
						path: ':name',
						component: () => import('../pages/ProductDetail/ProductDetail'),
					},
				],
			},
			{
				path: 'order',
				component: () => import('../pages/Order/Order'),
				meta: {
					title: 'Order'
				}
			},
			{
				path: 'account',
				component: () => import('../pages/Account/Account'),
				children: [
					{
						path: 'order',
						component: () =>
							import('../components/content/Account/AccountOrder/AccountOrder'),
					},
				],
			},
			{
				path: 'location',
				component: () => import('../pages/Location/Location'),
				meta: {
					title: 'Location',
				},
			},
			{
				path: 'tents',
				component: () => import('../pages/Tents/Tents'),
				meta: {
					title: 'Tents',
				},
			},
			{
				path: 'pricing',
				component: () => import('../pages/Pricing/Pricing'),
				meta: {
					title: 'Pricing',
				},
			},
			{
				path: 'about',
				component: () => import('../pages/About/About'),
				meta: {
					title: 'About',
				},
			},
		],
	},
	{
		path: '/login',
		component: () => import('../pages/Login/Login'),
		meta: {
			title: 'Sign In',
			noNeed: true,
		},
	},
	{
		path: '/register',
		component: () => import('../pages/Register/Register'),
		meta: {
			title: 'Sign Up',
			noNeed: true,
		},
	},
]

// 路由拦截
export const onRouteBefore = ({ pathname, meta }) => {
	if (meta.title !== undefined) {
		document.title = meta.title
	}
	const globalState = store.getState()
	if (pathname === '/register') {
		return '/register'
	} else if (pathname === '/login') {
		return '/login'
	}
	if (!globalState.access.isLogged) {
		return '/login'
	}
}

export default router
