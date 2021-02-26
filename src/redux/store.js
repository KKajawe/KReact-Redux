import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunkMiddleware)))

export default store