import {
	FETCH_BLOGS_FAILED,
	FETCH_BLOGS_START,
	FETCH_BLOGS_SUCCESS,
} from '../constants/blogsConstants'

export const blogsReducer = (state = { blogs: [] }, action) => {
	switch (action.type) {
		case FETCH_BLOGS_START:
			return { loading: true, blogs: [] }
		case FETCH_BLOGS_SUCCESS:
			return {
				loading: false,
				blogs: action.payload.blogs,
				pages: action.payload.pages,
				page: action.payload.page,
			}
		case FETCH_BLOGS_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
