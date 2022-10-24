import { SET_BOOK, GET_BOOK } from '../constants/bookConstants'

// subscription
export const setBook = book => async dispatch => {
	dispatch({ type: SET_BOOK, payload: book })
}

export const getBook = () => async dispatch => {
	dispatch({ type: GET_BOOK })
}
