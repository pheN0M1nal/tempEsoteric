import {
	FETCH_BLOGS_START,
	FETCH_BLOGS_FAILED,
	FETCH_BLOGS_SUCCESS,
} from './constants/blogsConstants'

export const fetchBlogs = id => async dispatch => {
	try {
		dispatch({ type: FETCH_BLOGS_START })

		//const { data } = await axios.get(`/api/blogs/page=2&sections=2`)

		dispatch({ type: FETCH_BLOGS_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: FETCH_BLOGS_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
