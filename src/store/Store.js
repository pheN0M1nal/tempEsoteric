import { applyMiddleware, combineReducers, createStore } from 'redux'
import { userProfileReducer } from './reducers/userReducer'
import { blogsReducer } from './reducers/blogsReducer'
import {
	pdfModalReducer,
	loginModalReducer,
	profileModalReducer,
	subscriptionModalReducer,
} from './reducers/modalReducer'
import {
	userLoginReducer,
	userRegisterReducer,
	userDeleteReducer,
	userUpdateProfileReducer,
} from './reducers/userReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
	userProfile: userProfileReducer,
	blogs: blogsReducer,
	pdfModal: pdfModalReducer,
	loginModal: loginModalReducer,
	profileModal: profileModalReducer,
	subscriptionModal: subscriptionModalReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDelete: userDeleteReducer,
	userUpdateProfile: userUpdateProfileReducer,
})

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)
