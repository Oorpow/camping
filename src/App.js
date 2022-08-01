import React, { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/common/Loading/Loading'
import { useSelector } from 'react-redux'
import SyncRouter from './router/routeList'

function App() {
	const isLoading = useSelector((state) => state.loading)
	// const [load, setLoad] = useState(isLoading)

	// useEffect(() => {
	// 	setLoad(isLoading)
	// }, [isLoading])

	return (
		<>
			<SyncRouter />
			{/* {load && <Loading />} */}
		</>
	)
}

export default App
