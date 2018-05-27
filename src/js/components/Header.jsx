"use strict";

import React from 'react';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                
                <ul className="nav nav-tabs">
                    <li role="presentation"><a href="/#home"> Home</a></li>
                    <li role="presentation"><a href="/#bikes">Bikes</a></li>
                    <li role="presentation"><a href="/#testrides">My Test Rides</a></li>
                    <li role="presentation"><a href="/#orders">My Orders</a></li>
                    <li role="presentation"><a href="/#contact">Contact</a></li>
                </ul>

            </div>);

    }
}
