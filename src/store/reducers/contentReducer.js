import {
	FETCH_CONTENT_FAILED,
	FETCH_CONTENT_START,
	FETCH_CONTENT_SUCCESS,
} from '../constants/contentConstants';

let initialState = {
	content: [
		{
			loading: false,
			pageClass: '',
			count: 0,
			pageNumber: 1,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageClass: '',
			count: 0,
			pageNumber: 2,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageClass: '',
			count: 0,
			pageNumber: 3,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageClass: '',
			count: 0,
			pageNumber: 4,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageClass: '',
			count: 0,
			pageNumber: 5,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageClass: '',
			count: 0,
			pageNumber: 7,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
		{
			loading: false,
			pageClass: '',
			count: 0,
			pageNumber: 9,
			pageContent: [],
			paginationNumber: 1,
			error: '',
		},
	],
};

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
						});
					} else {
						arr.push(thing);
					}
					return arr;
				}, []),
			};
		case FETCH_CONTENT_SUCCESS:
			return {
				...state,
				content: state.content.reduce((arr, thing) => {
					if (thing.pageNumber === action.payload.page) {
						arr.push({
							...thing,
							pageContent: action.payload.content,
							loading: false,
							count: action.payload.count,
							pageClass: action.payload.pageClass,
						});
					} else {
						arr.push(thing);
					}
					return arr;
				}, []),
			};
		case FETCH_CONTENT_FAILED:
			return {
				...state,
				content: state.content.reduce((arr, thing) => {
					if (thing.pageNumber === action.payload.page) {
						arr.push({
							...thing,
							error: action.payload.error,
						});
					} else {
						arr.push(thing);
					}
					return arr;
				}, []),
			};
		default:
			return state;
	}
};
