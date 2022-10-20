import { BrowserRouter } from 'react-router-dom'
import { GlobalRoutes } from './routes/GlobalRoutes'

const App = () => {
	return (
		<BrowserRouter>
			<GlobalRoutes />
		</BrowserRouter>
	)
}

export default App
