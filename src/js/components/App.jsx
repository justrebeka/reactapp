"use strict";

import React from 'react';

import { Navbar, Button } from 'react-bootstrap';
import Header from './Header.jsx';

export default class App extends React.Component{

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <h1>  </h1>
                <br />
                {
                    !isAuthenticated() && (
                        <Button
                            id="qsLoginBtn"
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.login.bind(this)}
                        >
                            Log In
                  </Button>
                    )
                }
                {
                    isAuthenticated() && (
                        <Button
                            id="qsLogoutBtn"
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.logout.bind(this)}
                        >
                            Log Out
                  </Button>
                    )
                }
                <Header />
                
            </div>);

    }
}

