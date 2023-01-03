import {
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_FAILED,
    FETCH_USER_PROFILE_START,
    CLEAR_USER_PROFILE,
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_RESET_PASS_REQUEST,
    USER_RESET_PASS_SUCCESS,
    USER_RESET_PASS_FAIL,
} from "../constants/userProfileConstants";
import axios from "axios";
import { HIDE_LOGIN_MODAL } from "../constants/modalConstants";
import { notifySuccess } from "../../helpers/notifications/notifySuccess";
import {
    post_logout,
    patch_profile,
    post_ChangePassword,
    post_Login,
    post_Signup,
    get_profile,
} from "../../api/EndPoints";
import axiosInstance from "../../config/api/axois";

let Auth = window.localStorage.getItem("access_token");
export const fetchUserProfile = () => async (dispatch) => {
    dispatch({ type: FETCH_USER_PROFILE_START, payload: null });

    axiosInstance()
        .get(get_profile())
        .then((response) => {
            console.log(response.data, "fetch user profile");
            dispatch({
                type: FETCH_USER_PROFILE_SUCCESS,
                payload: response.data,
            });
        })
        .catch((err) => {
            // if (err.response && err.response.status === 401) {
            //     window.localStorage.removeItem("access_token");
            //     window.localStorage.removeItem("refresh_token");
            // }
            dispatch({ type: FETCH_USER_PROFILE_FAILED, payload: null });
        });
};

export const register = (formData) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
    });

    console.log("formdata", formData);

    axiosInstance()
        .post(post_Signup(), formData)
        .then((response) => {
            console.log(response, "signup user initially");
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: response?.data,
            });
            const { refresh, access } = response?.data?.token;
            window.localStorage.setItem("access_token", access);
            window.localStorage.setItem("refresh_token", refresh);
            notifySuccess("Registered successfully");

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response.data,
            });
            notifySuccess("Login successfull");
            dispatch({
                type: HIDE_LOGIN_MODAL,
            });
        })
        .catch((error) => {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });
};

export const login = (data) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST,
    });
    axiosInstance()
        .post(post_Login(), data)
        .then((response) => {
            console.log("Response data ", response);
            const { refresh, access } = response?.data;
            window.localStorage.setItem("access_token", access);
            window.localStorage.setItem("refresh_token", refresh);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response?.data,
            });
            notifySuccess("Login successfull");

            dispatch({
                type: HIDE_LOGIN_MODAL,
            });
        })
        .catch((error) => {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });

    //   localStorage.setItem("userInfo", JSON.stringify(modData))
    //   notifySuccess("Login success")

    //   dispatch({
    //     type: USER_LOGIN_SUCCESS,
    //     payload: modData,
    //   })

    //   dispatch({
    //     type: FETCH_USER_PROFILE_SUCCESS,
    //     payload: modData,
    //   })

    //   dispatch({
    //     type: HIDE_LOGIN_MODAL,
    //   })
};

export const logout = () => (dispatch) => {
    console.log("object");
    localStorage.removeItem("userInfo");

    dispatch({ type: USER_LOGOUT });
    dispatch({ type: CLEAR_USER_PROFILE });
};

export const editProfile = (user) => async (dispatch) => {
    dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
    });
    axiosInstance()
        .patch(patch_profile(), user)
        .then((response) => {
            console.log("response for update action", response);
            dispatch({
                type: USER_UPDATE_PROFILE_SUCCESS,
                payload: response.data,
            });
            localStorage.setItem("userInfo", JSON.stringify(user));
            notifySuccess("Profile Updated successfully");
            dispatch({
                type: HIDE_LOGIN_MODAL,
            });
        })
        .catch((error) => {
            dispatch({
                type: USER_UPDATE_PROFILE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });
};

export const resetPassword = (formData) => async (dispatch) => {
    dispatch({
        type: USER_RESET_PASS_REQUEST,
    });
    axiosInstance()
        .post(post_ChangePassword(), formData)
        .then((response) => {
            console.log("response for resetPass action", response.data);
            dispatch({
                type: USER_RESET_PASS_SUCCESS,
                payload: response.data.message,
            });
            notifySuccess(response.data.message);
            dispatch({
                type: HIDE_LOGIN_MODAL,
            });
        })
        .catch((error) => {
            dispatch({
                type: USER_RESET_PASS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });
};
