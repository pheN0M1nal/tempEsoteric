import { createContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from './store/actions/userActions'
import  {GlobalRoutes}  from './routes/GlobalRoutes'


export const QuizItemsContext = createContext({})
export const IsAdmin = createContext({})
export const GlobalUserProfileContext = createContext({
	isFetchingProfile: null,
	profile: null,
	lastTimeFetched: null,
})
let Auth = window.localStorage.getItem("access")

let isAuthenticated=Auth?true:true;

const App = () => {
	const { isFetchingProfile, profile, lastTimeFetched } = useSelector(
		state => state.userProfile
	)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUserProfile)
	}, [])
	return (
		<GlobalUserProfileContext.Provider
			value={{ isFetchingProfile, profile ,isAuthenticated}}
		>
			<BrowserRouter>
				<GlobalRoutes />
			</BrowserRouter>
		</GlobalUserProfileContext.Provider>
	)
}

export default App
