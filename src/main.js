import React from "react";
import { Provider } from "react-redux";
import store from "./config/store";
import FormTodo from "./internal/todo/screen/form-todo";

const Main = () => (
  <Provider store={store}>
    <FormTodo />
  </Provider>
);

export default Main;
