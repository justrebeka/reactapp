"use strict";

import React from 'react';

export default class Car extends React.Component {
    render() {

        return (
            <div>
                <div>{this.props.brand}</div>
                <div>{this.props.model}</div>
                <div>{this.props.year}</div>
                <div>{this.props.price}</div>
            </div>
        )
    }
}