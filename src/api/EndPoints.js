// BEGINNING API INTEGRATION

const baseURL = 'http://127.0.0.1:8000'
// const baseURL = process.env.NODE_ENV === "production"
// 	? `${process.env.REACT_APP_MAIN_SERVER_URL_PRODUCTION}/api`
// 	: `${process.env.REACT_APP_MAIN_SERVER_URL_DEVELOPMENT}/api`;

// AUTHENTICATION APIS
export const userLogin = () => `${baseURL}/user_login`
export const userSignup = () => `${baseURL}/user_signup`
export const adminLogin = () => `${baseURL}/admin_login`
export const adminSignup = () => `${baseURL}/admin_signup`
export const logout = id => `${baseURL}/logout/${id}`
export const forgotPassword = email => `${baseURL}/forgot_password/${email}`

// USER APIS
export const getUsers = () => `${baseURL}/getUsers`
export const updateUserProfile = id => `${baseURL}/updateUserProfile/${id}`
export const deleteUser = id => `${baseURL}/deleteUser/${id}`
export const approveUser = id => `${baseURL}/approveUser/${id}`

// ADMIN APIS
