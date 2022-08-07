import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router'
import Guard from '.'
import Loading from '../../components/common/Loading/Loading'

let handleRouteBefore = null

// 设置路由导航守卫函数
export function setRouteBefore(fn) {
	handleRouteBefore = fn
}

/**
 * 懒加载
 * @param {*} fn
 * @param {*} meta
 */
function lazyLoad(fn, meta) {
	meta = meta || {}
	const Element = lazy(fn)
	const lazyElement = (
		<Suspense fallback={<Loading />}>
			<Element _meta={meta} />
		</Suspense>
	)

	return <Guard element={lazyElement} meta={meta} handleRouteBefore={handleRouteBefore} />
}

export function transformRoutes(routes) {
	const list = []
	routes.forEach((route) => {
		const obj = { ...route }

        if (obj.redirect) {
            obj.element = <Navigate to={obj.redirect} replace={true} />
        }
        if (obj.component) {
            obj.element = lazyLoad(obj.component, obj.meta)
        }

        delete obj.redirect
        delete obj.component
        delete obj.meta

        if (obj.children) {
            obj.children = transformRoutes(obj.children)
        }
        list.push(obj)
	})
    return list
}

