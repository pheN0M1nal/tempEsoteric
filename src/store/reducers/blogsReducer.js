import {
	FETCH_BLOGS_FAILED,
	FETCH_BLOGS_START,
	FETCH_BLOGS_SUCCESS,
	FETCH_BLOG_LABEL_FAILED,
	FETCH_BLOG_LABEL_START,
	FETCH_BLOG_LABEL_SUCCESS,
	FETCH_BLOG_FROM_LABEL_FAILED,
	FETCH_BLOG_FROM_LABEL_START,
	FETCH_BLOG_FROM_LABEL_SUCCESS,
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
