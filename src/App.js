import './App.css'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { setRouteBefore, transformRoutes } from '../src/router/guard/guardFn'
import router, { onRouteBefore } from './router'
import { useRoutes } from 'react-router'

function App() {
	setRouteBefore(onRouteBefore)
	const elements = useRoutes(transformRoutes(router))

	return elements
}

export default App
