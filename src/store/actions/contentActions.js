import {
  FETCH_CONTENT_FAILED,
  FETCH_CONTENT_START,
  FETCH_CONTENT_SUCCESS,
} from "../constants/contentConstants"
import AxiosInstance from "../../config/api/axois"

const url =
  process.env.REACT_APP_NODE_ENV === "production"
    ? process.env.REACT_APP_JSON_SERVER_PRODUCTION
    : process.env.REACT_APP_JSON_SERVER_DEVELOPMENT

export const fetchContent = (page, section) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_CONTENT_START,
      payload: {
        page: page,
        section: section,
      },
    })
    const api = `${url}/content?page=${page}`
    // const api = `http://localhost:3500/content/blogs`
    const { data } = await AxiosInstance().get(api)
    // console.log(data);

    dispatch({
      type: FETCH_CONTENT_SUCCESS,
      payload: {
        blog: data[0].blog ? data[0].blog : "",
        content: data[0].pageContent ? data[0].pageContent : [],
        page: page,
        section: section,
        count: data[0].count ? data[0].count : 0,
        pageClass: data[0].pageClass,
        blogListName: data[0].blogListName,
        blogListId: data[0].blogListId,
      },
    })
  } catch (error) {
    dispatch({
      type: FETCH_CONTENT_FAILED,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        page: page,
      },
    })
  }
}
