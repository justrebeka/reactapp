import $ from 'jquery';

import Routes from './Routes.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import {
    HashRouter,
    BrowserRouter
} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter history={history}>
        {Routes}
    </BrowserRouter>
), document.getElementById('app'))