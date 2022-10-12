import { Route, Routes } from 'react-router-dom'
import { ProtectedRouteComponent } from './ProtectedRouteComponent'
import { isAuthenticated, isGuest } from '../../conditions/Index'
import { HomeScreen } from '../../screens/HomeScreen'
import LogoutContainer from '../Authentication/logout/Container'
import LoginContainer from '../Authentication/login/Container'

export const GlobalRoutes = () => {
	return (
		<Routes>
			<Route
				path='/login'
				exact={true}
				element={
					<ProtectedRouteComponent
						conditions={{ '/': isGuest }}
						elementToRenderOnPass={<LoginContainer />}
						profileRequired={false}
					/>
				}
			/>
			<Route
				path='/logout'
				exact={true}
				element={
					<ProtectedRouteComponent
						conditions={{ '/login': isAuthenticated }}
						elementToRenderOnPass={<LogoutContainer />}
					/>
				}
			/>
			<Route path='/' exact={true} element={<HomeScreen />} />
		</Routes>
	)
}
