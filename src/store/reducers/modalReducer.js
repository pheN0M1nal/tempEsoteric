import {
	SHOW_MODAL,
	HIDE_MODAL,
	FAILED_MODAL,
} from '../constants/modalConstants'

export const pdfModalReducer = (state = { show: false, pdf: '' }, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				show: true,
				pdf: action.payload,
			}
		case HIDE_MODAL:
			return {
				show: false,
			}
		case FAILED_MODAL:
			return { show: false, error: action.payload }
		default:
			return state
	}
}

export const loginModalReducer = (state = { show: false, pdf: '' }, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				show: true,
				pdf: action.payload,
			}
		case HIDE_MODAL:
			return {
				show: false,
			}
		case FAILED_MODAL:
			return { show: false, error: action.payload }
		default:
			return state
	}
}
