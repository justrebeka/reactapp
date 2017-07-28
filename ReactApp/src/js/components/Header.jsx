"use strict";

import React from 'react';
import ReactDOM from  'react-dom';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                
                <ul className="nav nav-tabs">
                    <li role="presentation" className="active"><a href="/#home"> Home</a></li>
                    <li role="presentation"><a href="/#about">Buy</a></li>
                    <li role="presentation"><a href="/#"> Sell </a></li>
                </ul>

            </div>);

    }
}
