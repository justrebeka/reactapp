
"use strict";

import React from 'react';

import { Navbar, Button } from 'react-bootstrap';
import Header from './Header.jsx';

export default class App extends React.Component {

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
                <div className="row">
                    <div className="col-md-2">
                        <h1>EcoBikesTEST</h1>
                    </div>
                    <div className="col-md-2">
                        <h1>EcoBikes</h1>
                    </div>
                    <div className="col-md-2">
                        <img src={require('./eco.jpeg')} />
                    </div>
                    <div className="col-md-2 col-md-offset-3 align-center">
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
                    </div>
                </div>
                <Header />

                </div>
            )
    }
}

