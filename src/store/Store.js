import { applyMiddleware, combineReducers, createStore } from "redux"
import { userChangePassReducer, userForgotPasswordReducer, userProfileReducer } from "./reducers/userReducer"
import { contentReducer } from "./reducers/contentReducer"
import {
  blogLabelsReducer,
  blogsFromLabelReducer,
  blogReducer,
} from "./reducers/blogsReducer"
import {
  pdfModalReducer,
  loginModalReducer,
  profileModalReducer,
  blogModalReducer,
  subscriptionModalReducer,
  chatModalReducer,
} from "./reducers/modalReducer"
import {
  userLoginReducer,
  userRegisterReducer,
  userResetPassReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer"

import { bookReducer } from "./reducers/bookReducers"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({
  // Auth
  userProfile: userProfileReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userResetPass: userResetPassReducer,
  userForgotPass: userForgotPasswordReducer,
  userChangePass:userChangePassReducer,

  //blogs
  blog: blogReducer,
  blogLabels: blogLabelsReducer,
  blogsInfoFromLabel: blogsFromLabelReducer,

  //modals
  pdfModal: pdfModalReducer,
  blogModal: blogModalReducer,
  loginModal: loginModalReducer,
  profileModal: profileModalReducer,
  subscriptionModal: subscriptionModalReducer,
  ChatModal: chatModalReducer,

  //book
  book: bookReducer,

  // content
  content: contentReducer,
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userProfile: { profile: userInfoFromStorage },
}

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)
