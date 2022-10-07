import {
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_FAILED,
    FETCH_USER_PROFILE_START,
} from "./constants";
import axiosServerInstance from "../config/api/axois"


export const fetchUserProfile = (dispatch, getState) => {
    dispatch({type: FETCH_USER_PROFILE_START, payload: null});
    axiosServerInstance()
        .get("/auth/me/")
        .then((response) => {
            dispatch({type: FETCH_USER_PROFILE_SUCCESS, payload: response.data});
        })
        .catch((err) => {
            if (err.response && err.response.status === 401) {
                window.localStorage.removeItem("access_token");
                window.localStorage.removeItem("refresh_token");
            }
            dispatch({type: FETCH_USER_PROFILE_FAILED, payload: null});
        });
};
