import { applyMiddleware, combineReducers,createStore } from "redux";
import {userProfileReducer} from "./reducers/reducers"

import thunk from "redux-thunk";

const reducer = combineReducers({
    userProfileReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
