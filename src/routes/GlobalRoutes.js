import { Route, Routes } from 'react-router-dom'
import LogoutContainer from '../components/Authentication/logout/Container'
import HomeScreen from '../screens/HomeScreen'
// import {BlogsScreen} from '../screens/BlogsScreen'

export const GlobalRoutes = () => {
	return (
		<Routes>
			{/* <Route path='/blogs' element={<BlogsScreen />} /> */}
			<Route path='/' exact={true} element={<HomeScreen />} />
			<Route path='/logout' exact={true} element={<LogoutContainer />} />
		</Routes>
	)
}
