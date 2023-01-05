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
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_CHANGE_PASS_START,
    USER_CHANGE_PASS_SUCCESS,
    USER_CHANGE_PASS_FAIL,
    USER_RESET_PASS_START,
    USER_RESET_PASS_SUCCESS,
    USER_RESET_PASS_FAIL,
    USER_FORGOT_PASS_START,
    USER_FORGOT_PASS_SUCCESS,
    USER_FORGOT_PASS_FAIL,
} from "../constants/userProfileConstants";
import moment from "moment";

export const userProfileReducer = (
    state = {
        isFetchingProfile: null,
        profile: null,
        lastTimeFetched: null,
        error: null,
    },
    { type, payload }
) => {
    switch (type) {
        case FETCH_USER_PROFILE_START:
            return {
                ...state,
                isFetchingProfile: true,
                profile: state.profile,
            };
        case FETCH_USER_PROFILE_FAILED:
            return {
                ...state,
                isFetchingProfile: false,
                error: payload,
            };
        case FETCH_USER_PROFILE_SUCCESS:
            return {
                lastTimeFetched: moment(),
                isFetchingProfile: false,
                profile: payload,
            };
        case CLEAR_USER_PROFILE:
            return {
                lastTimeFetched: null,
                isFetchingProfile: null,
                profile: null,
            };
        default:
            return state;
    }
};

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userUpdateProfileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true };
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, user: action.payload };
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload };
        case USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
};

export const userForgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FORGOT_PASS_START:
            return { loading: true, success: false };
        case USER_FORGOT_PASS_SUCCESS:
            return { loading: false, success: true, message: action.payload };
        case USER_FORGOT_PASS_FAIL:
            return { loading: false, success: false, error: action.payload };
        default:
            return state;
    }
};

export const userResetPassReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_RESET_PASS_START:
            return { loading: true, success: false };
        case USER_RESET_PASS_SUCCESS:
            return { loading: false, success: true, message: action.payload };
        case USER_RESET_PASS_FAIL:
            return { loading: false, success: false, error: action.payload };
        default:
            return state;
    }
};

export const userChangePassReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CHANGE_PASS_START:
            return { loading: true, success: false };
        case USER_CHANGE_PASS_SUCCESS:
            return { loading: false, success: true, message: action.payload };
        case USER_CHANGE_PASS_FAIL:
            return { loading: false, success: false, error: action.payload };
        default:
            return state;
    }
};
