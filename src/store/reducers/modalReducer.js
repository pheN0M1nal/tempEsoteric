import {
	SHOW_PDF_MODAL,
	HIDE_PDF_MODAL,
	SHOW_LOGIN_MODAL,
	HIDE_LOGIN_MODAL,
	SHOW_PROFILE_MODAL,
	HIDE_PROFILE_MODAL,
	SHOW_SUBSCRIPTION_MODAL,
	HIDE_SUBSCRIPTION_MODAL,
} from '../constants/modalConstants'

export const pdfModalReducer = (state = { show: false, pdf: '' }, action) => {
	switch (action.type) {
		case SHOW_PDF_MODAL:
			return {
				show: true,
				pdf: action.payload,
			}
		case HIDE_PDF_MODAL:
			return {
				show: false,
			}
		default:
			return state
	}
}

export const loginModalReducer = (state = { show: false }, action) => {
	switch (action.type) {
		case SHOW_LOGIN_MODAL:
			return {
				show: true,
			}
		case HIDE_LOGIN_MODAL:
			return {
				show: false,
			}
		default:
			return state
	}
}

export const profileModalReducer = (state = { show: false }, action) => {
	switch (action.type) {
		case SHOW_PROFILE_MODAL:
			return {
				show: true,
			}
		case HIDE_PROFILE_MODAL:
			return {
				show: false,
			}
		default:
			return state
	}
}

export const subscriptionModalReducer = (state = { show: false }, action) => {
	switch (action.type) {
		case SHOW_SUBSCRIPTION_MODAL:
			return {
				show: true,
			}
		case HIDE_SUBSCRIPTION_MODAL:
			return {
				show: false,
			}
		default:
			return state
	}
}
