import {
	FETCH_CONTENT_FAILED,
	FETCH_CONTENT_START,
	FETCH_CONTENT_SUCCESS,
} from '../constants/contentConstants'
import AxiosInstance from '../../config/api/axois'

export const fetchContent = (page, section) => async dispatch => {
	try {
		dispatch({ type: FETCH_CONTENT_START })
		const api = `http://localhost:3500/content?page=${page}`
		// const api = `http://localhost:3500/content/blogs`
		const { data } = await AxiosInstance().get(api)
		console.log(data)

		dispatch({
			type: FETCH_CONTENT_SUCCESS,
			payload: {
				content: data[0].pageContent,
				page: page,
				section: section,
			},
		})
	} catch (error) {
		AxiosInstance().isCancel(error) && console.log('error: ', error)
		dispatch({
			type: FETCH_CONTENT_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
