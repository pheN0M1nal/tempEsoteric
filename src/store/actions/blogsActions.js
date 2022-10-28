import {
	FETCH_BLOGS_START,
	FETCH_BLOGS_FAILED,
	FETCH_BLOGS_SUCCESS,
	FETCH_BLOG_START,
	FETCH_BLOG_FAILED,
	FETCH_BLOG_SUCCESS,
	FETCH_BLOG_LABEL_FAILED,
	FETCH_BLOG_LABEL_START,
	FETCH_BLOG_LABEL_SUCCESS,
	FETCH_BLOG_FROM_LABEL_FAILED,
	FETCH_BLOG_FROM_LABEL_START,
	FETCH_BLOG_FROM_LABEL_SUCCESS,
} from '../constants/blogsConstants'

import AxiosInstance from '../../config/api/axois'

export const fetchBlog = blogUrl => async dispatch => {
	try {
		dispatch({ type: FETCH_BLOG_START })
		const api = `http://localhost:3500/${blogUrl}`
		const { data } = await AxiosInstance().get(api)
		dispatch({
			type: FETCH_BLOG_SUCCESS,
			payload: { blog: data },
		})
	} catch (error) {
		AxiosInstance().isCancel(error) && console.log('error: ', error)
		dispatch({
			type: FETCH_BLOG_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const fetchLabels = () => async dispatch => {
	try {
		dispatch({ type: FETCH_BLOG_LABEL_START })
		const api = `http://localhost:3500/labels`
		const { data } = await AxiosInstance().get(api)
		dispatch({
			type: FETCH_BLOG_LABEL_SUCCESS,
			payload: { blogLabels: data },
		})
	} catch (error) {
		AxiosInstance().isCancel(error) && console.log('error: ', error)
		dispatch({
			type: FETCH_BLOG_LABEL_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const fetchBlogFromLabel = label => async dispatch => {
	try {
		dispatch({ type: FETCH_BLOG_FROM_LABEL_START })

		const api = `http://localhost:3500/${label}`
		const { data } = await AxiosInstance().get(api)
		dispatch({
			type: FETCH_BLOG_FROM_LABEL_SUCCESS,
			payload: { blogsInfo: data },
		})
	} catch (error) {
		dispatch({
			type: FETCH_BLOG_FROM_LABEL_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
