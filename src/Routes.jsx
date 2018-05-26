"use strict";

var React = require("react");


import App from './js/components/App.jsx';
import Home from './js/components/Home.jsx';
import Bikes from './js/components/Bikes.jsx';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

import {
    Switch,
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom' 

var Routes = (
    <div>

        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/bikes" component={Bikes} />
        <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
        }} />

    </div>
    );

module.exports = Routes;

