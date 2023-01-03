// BEGINNING API INTEGRATION

// const baseURL = 'http://127.0.0.1:8000'
const baseURL =
    process.env.REACT_APP_NODE_ENV === "production"
        ? `${process.env.REACT_APP_MAIN_SERVER_URL_PRODUCTION}/api/v1`
        : `${process.env.REACT_APP_MAIN_SERVER_URL_DEVELOPMENT}/api/v1`;

// AUTHENTICATION APIS

export const post_Login = (id) => `${baseURL}/auth/login/`;
export const post_Signup = (id) => `${baseURL}/auth/register/`;
export const post_logout = (id) => `${baseURL}/auth/logout/`;
export const post_resetPasswordStep1 = (id) => `${baseURL}/auth/initiate_reset_password_email/`;
export const post_resetPasswordStep2 = (id) => `${baseURL}/auth/finalize_reset_password_email/`;
export const post_verifyEmailStep1 = (id) => `${baseURL}/auth/initiate_verify_email/`;
export const post_verifyEmailStep2 = (id) => `${baseURL}/auth/finalize_verify_email/`;
export const post_ChangePassword = (id) => `${baseURL}/auth/change_password/`;
// export const forgotPassword = (email) => `${baseURL}/forgot_password/${email}`;

// AUTH ME

export const get_profile = (id) => `${baseURL}/auth/me/`;
export const patch_profile = (id) => `${baseURL}/auth/me/`;

// FILE UPLOAD

export const get_fetchAllFilesUploaded = () => `${baseURL}/upload`;
export const post_singleFileUploaded = () => `${baseURL}/upload/`;
export const post_batchFileUploaded = () => `${baseURL}/upload/batch_upload/`;
export const patch_updateSingleFile = (id) => `${baseURL}/upload/${id}`;
export const delete_SingleFile = (id) => `${baseURL}/upload/${id}`;
export const delete_BatchFile = () => `${baseURL}/upload/batch_delete/`;
// ADMIN APIS

// USER GENERAL SUBSCRIPTION
export const get_userCurrentGeneralSubscription = () => `${baseURL}/user/subscription/`;

// All GENERAL SUBSCRIPTION
export const get_AllGeneralSubscriptionPlan = () => `${baseURL}/subscription/general/`;
export const get_SingleGeneralSubscriptionPlan = (id) => `${baseURL}/subscription/general/${id}/`;
export const post_CreateGeneralSubscriptionPlan = (id) => `${baseURL}/subscription/general/`;
