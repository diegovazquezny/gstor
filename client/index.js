import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from 'react-redux';
import store from './store';
import "./styles.css";

const app = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, app
);
