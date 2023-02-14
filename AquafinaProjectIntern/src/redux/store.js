import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleware = createStore(
    reducer,
    applyMiddleware(...middleware)
)