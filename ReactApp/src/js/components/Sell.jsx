"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var CarActionCreator = require('../../actions/CarActionCreator.jsx');
var CarStore = require('../../stores/CarStore.jsx');

export default class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: CarStore.getBrands()
        };
        this._onchange = this._onchange.bind(this);
    }

    _onchange() {
        this.setState({ brands: CarStore.getBrands() });
    }

    componentWillUnmount() {
        CarStore.removeChangeListener(this._onchange);
    }

    componentDidMount() {
        CarStore.addChangeListener(this._onchange);
        CarActionCreator.getBrands();

    }

    render() {
        return (
            <div>
                <h1>Which brands can you find?</h1>
                <ul>
                    {this.state.brands.map(function (brand) {
                        return <li key={brand}>{brand}</li>;
                    })}

                </ul>

            </div>);

    }
}

