import React from 'react'
import './App.css'
import { setRouteBefore, transformRoutes } from '../src/router/guard/guardFn'
import router, { onRouteBefore } from './router'
import { useRoutes } from 'react-router'

function App() {
	setRouteBefore(onRouteBefore)
	const elements = useRoutes(transformRoutes(router))

	return elements
}

export default App
