"use strict";

import React from 'react';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                
                <ul className="nav nav-tabs">
                    <li role="presentation"><a href="/#home"> Home</a></li>
                    <li role="presentation"><a href="/#demo">Demo</a></li>
                </ul>

            </div>);

    }
}
