"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var DemoActionCreator = require('../../actions/DemoActionCreator.jsx');
var DemoStore = require('../../stores/DemoStore.jsx');


export default class Demo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            topics: DemoStore.getTopics() 
        };
        this._onchange = this._onchange.bind(this);
    }
  
    _onchange() {
        this.setState({brands: DemoStore.getTopics()});
    }

    componentWillUnmount() {
        DemoStore.removeChangeListener(this._onchange);
    }

    componentDidMount()
    {
        DemoStore.addChangeListener(this._onchange);
        DemoActionCreator.getTopics();

    }

    render() {
        return (
            <div className="jumbotron">
                <h3> Which topics did we cover? </h3>
                <ul>
                    {this.state.topics.map(function (topic, index) {
                        return (<Topic key={index} index={index+1} name={topic}></Topic>);
                    })}

                </ul>


            </div>);

    }
}

