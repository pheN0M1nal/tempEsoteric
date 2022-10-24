import { SET_BOOK, GET_BOOK } from '../constants/bookConstants'

export const bookReducer = (state = { book: {} }, action) => {
	switch (action.type) {
		case SET_BOOK:
			return {
				book: action.payload,
			}
		case GET_BOOK:
			return state
		default:
			return state
	}
}
