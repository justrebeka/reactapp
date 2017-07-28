"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var CarActionCreator = require('../../actions/CarActionCreator.jsx');
var CarStore = require('../../stores/CarStore.jsx');

class Car extends React.Component {
    render() {

        return (
            <div>
                <div>{this.props.brand}</div>
                <button type="button" onClick={this.get.bind(this)} className="btn btn-link pull-right">
                    <span> GET</span>
                </button>
            </div>
        )
    }

    get() {

        CarActionCreator.getCar(this.props.brand);
    }
}

export default class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brands: CarStore.getBrands() 
        };
        this._onchange = this._onchange.bind(this);
    }
  
    _onchange() {
        this.setState({brands: CarStore.getBrands()});
    }

    componentWillUnmount() {
        CarStore.removeChangeListener(this._onchange);
    }

    componentDidMount()
    {
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
                        //return (<Car brand={brand} year={'1989'} model={'model'} price={'300'}></Car>);
                     })}
                  
                </ul>

               
            </div>);

    }
}

