import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import store from "./Redux-thunk-logger-axios-json/redux/Store/store";//redux mapToStateProps
import store from "./Redux-thunk-logger-axios-json/Redux-thunk/Redux/Store/store"; //redux-thunk-crud
import { BrowserRouter } from 'react-router-dom';
// import store from './ReduxToolkit-AsyncThunk-AntdUI/UserPost/redux/store'; //reduxToolkit-crud
import "antd/dist/antd.css";//import for antd
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
