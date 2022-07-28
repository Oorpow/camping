import React, { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Loading from './components/common/Loading/Loading'
import { useSelector } from 'react-redux'

function App() {
	const isLoading = useSelector((state) => state.loading)
	const [load, setLoad] = useState(isLoading)

	useEffect(() => {
		setLoad(isLoading)
	}, [isLoading])

	return (
		<>
			<Layout />
			{load && <Loading />}
		</>
	)
}

export default App
