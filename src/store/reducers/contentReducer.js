import {
	FETCH_CONTENT_FAILED,
	FETCH_CONTENT_START,
	FETCH_CONTENT_SUCCESS,
} from '../constants/contentConstants'

const initialState = {
	content: [
		{
			pageNumber: 1,
			pageContent: [],
			paginationNumber: 1,
		},
		{
			pageNumber: 2,
			pageContent: [],
			paginationNumber: 1,
		},
		{
			pageNumber: 3,
			pageContent: [],
			paginationNumber: 1,
		},
		{
			pageNumber: 4,
			pageContent: [],
			paginationNumber: 1,
		},
		{
			pageNumber: 5,
			pageContent: [],
			paginationNumber: 1,
		},
		{
			pageNumber: 7,
			pageContent: [],
			paginationNumber: 1,
		},
		{
			pageNumber: 9,
			pageContent: [],
			paginationNumber: 1,
		},
	],
}

const updateState = (state, content) => {}

export const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CONTENT_START:
			return { loading: true, content: [] }
		case FETCH_CONTENT_SUCCESS:
			return updateState(state, action.payload.content)
		case FETCH_CONTENT_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
