import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import {Provider} from 'react-redux';
import store from './js/store/index';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

