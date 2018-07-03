
"use strict";

import React from 'react';

import { Navbar, Button } from 'react-bootstrap';
import Header from './Header.jsx';

const path = "./eco.jpeg";

export default class App extends React.Component {

    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (this.props.auth.isAuthenticated() && !userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const { profile } = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-2 col-md-offset-1">
                        <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/35884820_618367771871436_3404103268203233280_n.jpg?_nc_cat=0&oh=0871db9ad1996095623af9e9825a997f&oe=5BAA1179" height="60%" width="60%"/>
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/35894289_618431048531775_7586145578954784768_n.jpg?_nc_cat=0&oh=d89e38e6eb277af82b6b0f577fb07704&oe=5BB8060C" height="100%" width="100%"/>
                    </div>
                    <div className="col-md-2 col-md-offset-1">
                        <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/35812525_618422608532619_5771666271720439808_o.jpg?_nc_cat=0&oh=7ac1a458b6b4a0f595f1bb90b1a0ed99&oe=5BB6D2A3" height="70%" width="70%" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h3 id="contact">BICICLETE SI TROTINETE ELECTRICE</h3>
                    </div>
                    <div className="col-md-4">
                        <h3 id="contact">SOLUTIA OPTIMA PENTRU TRAFICUL DIN ORAS</h3>
                    </div>
                    <div className="col-md-3">
                        <h3 id="contact">PENTRU CA TIMPUL CONTEAZA</h3>
                    </div>
                    <div className="col-md-1">
                        {
                            !isAuthenticated() && (
                                <Button
                                    id="qsLoginBtn"
                                    bsStyle="success"
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
                                    bsStyle="danger"
                                    className="btn-margin"
                                    onClick={this.logout.bind(this)}
                                >
                                    Log Out {profile.name}
                  </Button>
                            )
                        }
                    </div>
                </div>
                <Header isAuthenticated={isAuthenticated()} />

                </div>
            )
    }
}

