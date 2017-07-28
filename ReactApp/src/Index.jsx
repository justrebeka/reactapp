import $ from 'jquery';

import Routes from './Routes.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter
} from 'react-router-dom';

ReactDOM.render((
    <HashRouter >
        {Routes}
    </HashRouter >
), document.getElementById('app'))