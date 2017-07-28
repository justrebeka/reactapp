"use strict";

var React = require("react");


import App from './js/components/App.jsx';
import Home from './js/components/Home.jsx';
import About from './js/components/About.jsx';

import {
    Switch,
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom' 

var Routes = (
    <div>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />

    </div>
    );

module.exports = Routes;

