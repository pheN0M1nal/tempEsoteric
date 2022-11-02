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
} from "../constants/blogsConstants";

import AxiosInstance from "../../config/api/axois";

export const fetchBlog = (blogListId, blogId) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_BLOG_START });
        // const api = `http://localhost:3500/content?blogListId=${blogListId}/pageContent?blogId=${blogId}`;
        const api = `http://localhost:3500/blogUrl`;
        const { data } = await AxiosInstance().get(api);

        dispatch({
            type: FETCH_BLOG_SUCCESS,
            payload: { blog: data },
        });
    } catch (error) {
        AxiosInstance().isCancel(error) && console.log("error: ", error);
        dispatch({
            type: FETCH_BLOG_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const fetchLabels = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_BLOG_LABEL_START });
        const api = `http://localhost:3500/content	`;
        const { data } = await AxiosInstance().get(api);
       
		let hasData= data.filter((item)=>item.blogListId)
        
		
       
        console.log(hasData, "hasData");
        dispatch({
            type: FETCH_BLOG_LABEL_SUCCESS,
            payload: { blogLabels: hasData },
        });
    } catch (error) {
        AxiosInstance().isCancel(error) && console.log("error: ", error);
        dispatch({
            type: FETCH_BLOG_LABEL_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const fetchBlogFromLabel = (blogListId, blogId) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_BLOG_FROM_LABEL_START });

        const api = `http://localhost:3500/content?blogListId=${blogListId}`;
        const { data } = await AxiosInstance().get(api);
        // console.log(data,"all data")
        if (data) {
            dispatch({
                type: FETCH_BLOG_FROM_LABEL_SUCCESS,
                payload: { blogsInfo: data && data, requestedBlogId: blogId },
            });
        }
    } catch (error) {
        dispatch({
            type: FETCH_BLOG_FROM_LABEL_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
