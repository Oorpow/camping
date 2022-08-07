const { useLocation, Navigate } = require('react-router')

function Guard({ element, meta, handleRouteBefore }) {
	meta = meta || {}

	const location = useLocation()

	const { pathname } = location

	if (handleRouteBefore) {
		const pathRes = handleRouteBefore({ pathname, meta })
		
		if (pathRes && pathRes !== pathname) {
			element = <Navigate to={pathRes} replace={true} />
		}
	}

	return element
}

export default Guard
