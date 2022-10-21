import {
	FETCH_BLOGS_START,
	FETCH_BLOGS_FAILED,
	FETCH_BLOGS_SUCCESS,
} from '../constants/blogsConstants'
import axios from 'axios'

import AxiosInstance from '../../config/api/axois'

export const fetchBlogs = (page, section) => async dispatch => {
	try {
		dispatch({ type: FETCH_BLOGS_START })
		const api = `http://localhost:3500/content`
		const { data } = await axios.get(api)
		dispatch({
			type: FETCH_BLOGS_SUCCESS,
			payload: { blogs: data, page: page, section: section },
		})
	} catch (error) {
		axios.isCancel(error) && console.log('error: ', error)
		dispatch({
			type: FETCH_BLOGS_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
