"use strict";

import React from 'react';

import {
    Link
} from 'react-router-dom' 

export default class Header extends React.Component{
    render() {
        return (
            <div>
                
                <ul id="meniu" className="nav nav-tabs">
                    <li role="presentation"><Link to="/home">Home</Link></li>
                    <li role="presentation"><Link to="/bikes">Bikes</Link></li>
                    {this.props.isAuthenticated && (
                        <li role="presentation"><Link to="/testrides">My Test Rides</Link></li>)}
                    {this.props.isAuthenticated && (
                        <li role="presentation"><Link to="/orders">My Orders</Link></li>)}
                    <li role="presentation"><Link to="/contact">Contact</Link></li>
                </ul>

            </div>);

    }
}
