import { applyMiddleware, combineReducers, createStore } from 'redux'
import { userProfileReducer } from './reducers/userProfileReducer'
import { blogsReducer } from './reducers/blogsReducer'
import { modalReducer } from './reducers/modalReducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
	userProfile: userProfileReducer,
	blogs: blogsReducer,
	modal: modalReducer,
})

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)
