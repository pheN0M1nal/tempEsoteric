import { applyMiddleware, combineReducers, createStore } from 'redux'
import { userProfileReducer } from './reducers/userReducer'
import {
	blogLabelsReducer,
	blogsFromLabelReducer,
	blogsReducer,
	blogReducer,
} from './reducers/blogsReducer'
import {
	pdfModalReducer,
	loginModalReducer,
	profileModalReducer,
	blogModalReducer,
	subscriptionModalReducer,
	chatModalReducer,
} from './reducers/modalReducer'
import {
	userLoginReducer,
	userRegisterReducer,
	userDeleteReducer,
	userUpdateProfileReducer,
} from './reducers/userReducer'

import { bookReducer } from './reducers/bookReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
	// users
	userProfile: userProfileReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDelete: userDeleteReducer,
	userUpdateProfile: userUpdateProfileReducer,

	//blogs
	blog: blogReducer,
	blogs: blogsReducer,
	blogLabels: blogLabelsReducer,
	blogsInfoFromLabel: blogsFromLabelReducer,

	//modals
	pdfModal: pdfModalReducer,
	blogModal: blogModalReducer,
	loginModal: loginModalReducer,
	profileModal: profileModalReducer,
	subscriptionModal: subscriptionModalReducer,
	ChatModal: chatModalReducer,

	//book
	book: bookReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
	userProfile: { profile: userInfoFromStorage },
}

export const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
)
