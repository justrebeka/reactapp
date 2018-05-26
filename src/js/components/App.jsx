"use strict";

import React from 'react';

import Header from './Header.jsx';

export default class App extends React.Component{
    render() {
        return (
            <div>
                <img alt="Brand" src='./images/logo.png' style={{ float: "left" }} /> 
                <h1>  React + Flux demo </h1>
                <br />

                <Header />
                
            </div>);

    }
}

