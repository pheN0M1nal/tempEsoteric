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
} from "../constants/userProfileConstants"
import axiosServerInstance from "../../config/api/axois"
import axios from "axios"
import { HIDE_LOGIN_MODAL } from "../constants/modalConstants"
import { notifySuccess } from "../../helpers/notifications/notifySuccess"
import {
  registerEP,
  loginEP,
  patchUserInfoEP,
  resetPassEP,
} from "../../api/EndPoints"

localStorage.setItem(
  "access_token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjczMzI4NTIxLCJpYXQiOjE2NzI3MjM3MjEsImp0aSI6IjNiNTdhMWQ4NTJjYTQxZTY5OWYxY2NhYmI3MGYwN2JiIiwidXNlcl9pZCI6MX0.ZIPlb93WW_OivmdjKgyUzLgHuQCk-sDB5XKaGhBTs50"
)

export const fetchUserProfile = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_PROFILE_START, payload: null })
  axiosServerInstance()
    .get("/auth/me")
    .then((response) => {
      console.log(response.data)
      dispatch({
        type: FETCH_USER_PROFILE_SUCCESS,
        payload: response.data,
      })
    })
    .catch((err) => {
      if (err.response && err.response.status === 401) {
        window.localStorage.removeItem("access_token")
        window.localStorage.removeItem("refresh_token")
      }
      dispatch({ type: FETCH_USER_PROFILE_FAILED, payload: null })
    })
}

export const register = (formData) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  })

  console.log("formdata", formData)

  axios
    .post(registerEP(), formData)
    .then((response) => {
      console.log(response)
      //   dispatch({
      //     type: USER_REGISTER_SUCCESS,
      //     payload: response.data,
      //   })

      //   localStorage.setItem("userInfo", JSON.stringify(response.data))
      //   notifySuccess("Registered successfully")

      //   dispatch({
      //     type: USER_LOGIN_SUCCESS,
      //     payload: response.data,
      //   })

      //   dispatch({
      //     type: HIDE_LOGIN_MODAL,
      //   })

      //   dispatch({
      //     type: USER_REGISTER_SUCCESS,
      //     payload: response.data,
      //   })

      //   localStorage.setItem("userInfo", JSON.stringify(response.data))
      //   notifySuccess("Registered successfully")

      //   dispatch({
      //     type: USER_LOGIN_SUCCESS,
      //     payload: response.data,
      //   })

      //   dispatch({
      //     type: FETCH_USER_PROFILE_SUCCESS,
      //     payload: response.data,
      //   })

      //   dispatch({
      //     type: HIDE_LOGIN_MODAL,
      //   })
    })
    .catch((error) => {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    })
}

export const login = (data) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  })
  axiosServerInstance()
    .post(`http://44.202.246.88/api/v1/auth/login`, data)
    .then((response) => {
      console.log(response.data)
      //   dispatch({
      //     type: USER_LOGIN_SUCCESS,
      //     payload: response.data,
      //   })
      //   localStorage.setItem("userInfo", JSON.stringify(data))
      //   notifySuccess("Login successfull")
      //   dispatch({
      //     type: USER_LOGIN_SUCCESS,
      //     payload: data,
      //   })
      //   dispatch({
      //     type: HIDE_LOGIN_MODAL,
      //   })
    })
    .catch((error) => {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    })

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
}

export const logout = () => (dispatch) => {
  console.log("object")
  localStorage.removeItem("userInfo")

  dispatch({ type: USER_LOGOUT })
  dispatch({ type: CLEAR_USER_PROFILE })
}

export const editProfile = (user) => async (dispatch) => {
  dispatch({
    type: USER_UPDATE_PROFILE_REQUEST,
  })
  axiosServerInstance()
    .patch(patchUserInfoEP(), user)
    .then((response) => {
      console.log("response for update action", response)
      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: response.data,
      })
      localStorage.setItem("userInfo", JSON.stringify(user))
      notifySuccess("Profile Updated successfully")
      dispatch({
        type: HIDE_LOGIN_MODAL,
      })
    })
    .catch((error) => {
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    })
}

export const resetPassword = (formData) => async (dispatch) => {
  dispatch({
    type: USER_RESET_PASS_REQUEST,
  })
  axiosServerInstance()
    .post(resetPassEP(), formData)
    .then((response) => {
      console.log("response for resetPass action", response.data)
      dispatch({
        type: USER_RESET_PASS_SUCCESS,
        payload: response.data.message,
      })
      notifySuccess(response.data.message)
      dispatch({
        type: HIDE_LOGIN_MODAL,
      })
    })
    .catch((error) => {
      dispatch({
        type: USER_RESET_PASS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    })
}
