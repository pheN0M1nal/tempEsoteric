// BEGINNING API INTEGRATION

const baseURL =
  process.env.REACT_APP_NODE_ENV === "production"
    ? `${process.env.REACT_APP_MAIN_SERVER_URL_PRODUCTION}/api/v1`
    : `${process.env.REACT_APP_MAIN_SERVER_URL_DEVELOPMENT}/api/v1`

// AUTHENTICATION APIS
export const loginEP = () => `${baseURL}/auth/login`
export const registerEP = () => `${baseURL}/auth/register`
export const logoutEP = () => `${baseURL}/auth/logout`

// GET USER INFO
export const getUserInfoEP = () => `${baseURL}/auth/me`
export const patchUserInfoEP = () => `${baseURL}/auth/me`
export const resetPassEP = () => `${baseURL}/auth/change_password`

// USER APIS
export const initResetPassEP = () =>
  `${baseURL}/auth/initiate_reset_password_email/`

export const finalizeResetPassEP = () =>
  `${baseURL}/auth/finalize_reset_password_email/`

export const updateUserProfile = (id) => `${baseURL}/updateUserProfile/${id}`

export const deleteUser = (id) => `${baseURL}/deleteUser/${id}`

export const approveUser = (id) => `${baseURL}/approveUser/${id}`

// ADMIN APIS
