import {
	FETCH_BLOG_FAILED,
	FETCH_BLOG_START,
	FETCH_BLOG_SUCCESS,
	FETCH_BLOG_LABEL_FAILED,
	FETCH_BLOG_LABEL_START,
	FETCH_BLOG_LABEL_SUCCESS,
	FETCH_BLOG_FROM_LABEL_FAILED,
	FETCH_BLOG_FROM_LABEL_START,
	FETCH_BLOG_FROM_LABEL_SUCCESS,
} from '../constants/blogsConstants'

export const blogReducer = (state = { blog: {} }, action) => {
	switch (action.type) {
		case FETCH_BLOG_START:
			return { loading: true, blogs: {} }
		case FETCH_BLOG_SUCCESS:
			return {
				loading: false,
				blog: action.payload.blog,
			}
		case FETCH_BLOG_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const blogLabelsReducer = (state = { blogLabels: [] }, action) => {
	switch (action.type) {
		case FETCH_BLOG_LABEL_START:
			return { loading: true, blogLabels: [] }
		case FETCH_BLOG_LABEL_SUCCESS:
			return {
				loading: false,
				blogLabels: action.payload.blogLabels,
			}
		case FETCH_BLOG_LABEL_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const blogsFromLabelReducer = (state = { blogsInfo: [] }, action) => {
	switch (action.type) {
		case FETCH_BLOG_FROM_LABEL_START:
			return { loading: true, blogsInfo: [] }
		case FETCH_BLOG_FROM_LABEL_SUCCESS:
			return {
				loading: false,
				blogsInfo: action.payload.blogsInfo,
			}
		case FETCH_BLOG_FROM_LABEL_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
