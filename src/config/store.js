import { combineReducers, createStore } from "redux";

// reducers
import todoReducer from "../internal/todo/duck/todo";

// collect reducers
const reducers = combineReducers({ todo: todoReducer });

// collect middlewares

// create store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
