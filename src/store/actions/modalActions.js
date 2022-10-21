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

// profile
export const showProfileModal = () => async dispatch => {
	dispatch({ type: SHOW_PROFILE_MODAL })
}

export const hideProfileModal = () => async dispatch => {
	dispatch({ type: HIDE_PROFILE_MODAL })
}

// subscription
export const showSubscriptionModal = () => async dispatch => {
	dispatch({ type: SHOW_SUBSCRIPTION_MODAL })
}

export const hideSubscriptionModal = () => async dispatch => {
	dispatch({ type: HIDE_SUBSCRIPTION_MODAL })
}
