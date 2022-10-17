import {
	SHOW_PDF_MODAL,
	HIDE_PDF_MODAL,
	SHOW_LOGIN_MODAL,
	HIDE_LOGIN_MODAL,
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
