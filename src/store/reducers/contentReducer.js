import {
	FETCH_CONTENT_FAILED,
	FETCH_CONTENT_START,
	FETCH_CONTENT_SUCCESS,
} from '../constants/contentConstants'

let initialState = {
	content: [
		{
			loading: false,
			pageNumber: 1,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageNumber: 2,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageNumber: 3,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageNumber: 4,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageNumber: 5,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageNumber: 7,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageNumber: 9,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
	],
}

export const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CONTENT_START:
			return {
				...state,
				content: state.content.reduce((arr, thing) => {
					if (thing.pageNumber === action.payload.page) {
						arr.push({
							...thing,
							loading: true,
						})
					} else {
						arr.push(thing)
					}
					return arr
				}, []),
			}
		case FETCH_CONTENT_SUCCESS:
			return {
				...state,
				content: state.content.reduce((arr, thing) => {
					if (thing.pageNumber === action.payload.page) {
						arr.push({
							...thing,
							pageContent: action.payload.content,
							loading: false,
						})
					} else {
						arr.push(thing)
					}
					return arr
				}, []),
			}
		case FETCH_CONTENT_FAILED:
			return {
				...state,
				content: state.content.reduce((arr, thing) => {
					if (thing.pageNumber === action.payload.page) {
						arr.push({
							...thing,
							error: action.payload.error,
						})
					} else {
						arr.push(thing)
					}
					return arr
				}, []),
			}
		default:
			return state
	}
}
