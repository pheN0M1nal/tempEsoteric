import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
// import {BlogsScreen} from '../screens/BlogsScreen'

export const GlobalRoutes = () => {
	return (
		<Routes>
			{/* <Route path='/blogs' element={<BlogsScreen />} /> */}
			<Route path='/' exact={true} element={<HomeScreen />} />
		</Routes>
	)
}
