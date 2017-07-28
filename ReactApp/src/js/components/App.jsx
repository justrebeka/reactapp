"use strict";

import React from 'react';

import Header from './Header.jsx';

export default class App extends React.Component{
    render() {
        return (
            <div>
                <img alt="Brand" src='./images/logo.png' style={{ float: "left" }} /> 
                <h1> Buy - YoUr - Car </h1>
                <br />

                <Header />
                
            </div>);

    }
}

