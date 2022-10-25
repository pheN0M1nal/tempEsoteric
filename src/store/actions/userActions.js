import {
	FETCH_USER_PROFILE_SUCCESS,
	FETCH_USER_PROFILE_FAILED,
	FETCH_USER_PROFILE_START,
	CLEAR_USER_PROFILE,
	USER_DELETE_FAIL,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_RESET,
	USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userProfileConstants'
import axiosServerInstance from '../../config/api/axois'
import { HIDE_LOGIN_MODAL } from '../constants/modalConstants'
import { notifySuccess } from '../../helpers/notifications/notifySuccess'
import { userLogin, updateUserProfile } from '../../api/EndPoints'

export const fetchUserProfile = (dispatch, getState) => {
	dispatch({ type: FETCH_USER_PROFILE_START, payload: null })
	// axiosServerInstance()
	// 	.get('/auth/me/')
	// 	.then(response => {
	// 		dispatch({
	// 			type: FETCH_USER_PROFILE_SUCCESS,
	// 			payload: response.data,
	// 		})
	// 	})
	// 	.catch(err => {
	// 		if (err.response && err.response.status === 401) {
	// 			window.localStorage.removeItem('access_token')
	// 			window.localStorage.removeItem('refresh_token')
	// 		}
	// 		dispatch({ type: FETCH_USER_PROFILE_FAILED, payload: null })
	// 	})
}

export const register = modData => async dispatch => {
	dispatch({
		type: USER_REGISTER_REQUEST,
	})

	//
	// axiosServerInstance()
	// 	.post(userSignup(), modData)
	// 	.then(response => {
	// 		dispatch({
	// 			type: USER_REGISTER_SUCCESS,
	// 			payload: response.data,
	// 		})

	// 		localStorage.setItem('userInfo', JSON.stringify(data))
	// 		notifySuccess('Registered successfully')

	// 		dispatch({
	// 			type: USER_LOGIN_SUCCESS,
	// 			payload: data,
	// 		})

	// 		dispatch({
	// 			type: HIDE_LOGIN_MODAL,
	// 		})
	// 	})
	// 	.catch(error => {
	// 		dispatch({
	// 			type: USER_REGISTER_FAIL,
	// 			payload:
	// 				error.response && error.response.data.message
	// 					? error.response.data.message
	// 					: error.message,
	// 		})
	// 	})

	dispatch({
		type: USER_REGISTER_SUCCESS,
		payload: modData,
	})

	localStorage.setItem('userInfo', JSON.stringify(modData))
	notifySuccess('Registered successfully')

	dispatch({
		type: USER_LOGIN_SUCCESS,
		payload: modData,
	})

	dispatch({
		type: FETCH_USER_PROFILE_SUCCESS,
		payload: modData,
	})

	dispatch({
		type: HIDE_LOGIN_MODAL,
	})
}

export const login = data => async dispatch => {
	dispatch({
		type: USER_LOGIN_REQUEST,
	})
	// 	axiosServerInstance()
	// 		.post(userLogin(), data)
	// 		.then(response => {
	// 			dispatch({
	// 				type: USER_LOGIN_SUCCESS,
	// 				payload: response.data,
	// 			})
	// 			localStorage.setItem('userInfo', JSON.stringify(data))
	// 			notifySuccess('Login successfull')
	// 			dispatch({
	// 				type: USER_LOGIN_SUCCESS,
	// 				payload: data,
	// 			})
	// 			dispatch({
	// 				type: HIDE_LOGIN_MODAL,
	// 			})
	// 		})
	// 		.catch(error => {
	// 			dispatch({
	// 				type: USER_LOGIN_FAIL,
	// 				payload:
	// 					error.response && error.response.data.message
	// 						? error.response.data.message
	// 						: error.message,
	// 			})
	// 		})

	const modData = {
		firstname: 'john',
		lastname: 'doe',
		username: 'john123',
		email: 'admin@example.com',
		password: '123',
		contact_number: '0000',
		logo: 'dummy.jpg',
	}

	localStorage.setItem('userInfo', JSON.stringify(modData))
	notifySuccess('Login success')

	dispatch({
		type: USER_LOGIN_SUCCESS,
		payload: modData,
	})

	dispatch({
		type: FETCH_USER_PROFILE_SUCCESS,
		payload: modData,
	})

	dispatch({
		type: HIDE_LOGIN_MODAL,
	})
}

export const logout = () => dispatch => {
	console.log('object')
	localStorage.removeItem('userInfo')

	dispatch({ type: USER_LOGOUT })
	dispatch({ type: CLEAR_USER_PROFILE })
}

export const updateProfile = user => async dispatch => {
	dispatch({
		type: USER_UPDATE_PROFILE_REQUEST,
	})
	axiosServerInstance()
		.post(updateUserProfile(), user)
		.then(response => {
			dispatch({
				type: USER_UPDATE_PROFILE_SUCCESS,
				payload: response.data,
			})
			localStorage.setItem('userInfo', JSON.stringify(user))
			notifySuccess('Profile Updated successfully')
			dispatch({
				type: HIDE_LOGIN_MODAL,
			})
		})
		.catch(error => {
			dispatch({
				type: USER_UPDATE_PROFILE_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			})
		})
}
