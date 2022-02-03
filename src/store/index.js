import { combineReducers, createStore } from "redux";
import reducer from "../reducer";

const store = createStore(combineReducers({
    ...combineReducers,
}))

export default store;