import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { fetchConfig, fetchContent } from './redux/actions/configAction';
import * as serviceWorker from './serviceWorker';
import './assets/css/app.scss';

Promise.all([store.dispatch(fetchConfig()), store.dispatch(fetchContent())]).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
