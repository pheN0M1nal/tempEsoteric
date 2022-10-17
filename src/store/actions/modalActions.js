import {
	SHOW_PDF_MODAL,
	HIDE_PDF_MODAL,
	SHOW_LOGIN_MODAL,
	HIDE_LOGIN_MODAL,
} from '../constants/modalConstants'

// PDF
export const showPdfModal = pdf => async dispatch => {
	dispatch({ type: SHOW_PDF_MODAL, payload: pdf })
}

export const hidePdfModal = () => async dispatch => {
	dispatch({ type: HIDE_PDF_MODAL })
}

// LOGIN/SIGNUP
export const showLoginModal = () => async dispatch => {
	dispatch({ type: SHOW_LOGIN_MODAL })
}

export const hideLoginModal = () => async dispatch => {
	dispatch({ type: HIDE_LOGIN_MODAL })
}
