"use strict";

import React from 'react';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                
                <ul id="meniu" className="nav nav-tabs">
                    <li role="presentation"><a href="/#home" className="home"> Home</a></li>
                    <li role="presentation"><a href="/#bikes" className="home">Bikes</a></li>
                    <li role="presentation"><a href="/#testrides" className="home">My Test Rides</a></li>
                    <li role="presentation"><a href="/#orders" className="home">My Orders</a></li>
                    <li role="presentation"><a href="/#contact" className="home">Contact</a></li>
                </ul>

            </div>);

    }
}
