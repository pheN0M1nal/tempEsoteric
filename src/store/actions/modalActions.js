import {
	SHOW_MODAL,
	HIDE_MODAL,
	FAILED_MODAL,
} from '../constants/modalConstants'

export const showModal = pdf => async dispatch => {
	try {
		dispatch({ type: SHOW_MODAL, payload: pdf })
	} catch (error) {
		dispatch({
			type: FAILED_MODAL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const hideModal = () => async dispatch => {
	try {
		dispatch({ type: HIDE_MODAL })
	} catch (error) {
		dispatch({
			type: FAILED_MODAL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
