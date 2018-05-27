"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var DemoActionCreator = require('../../actions/DemoActionCreator.jsx');
var DemoStore = require('../../stores/DemoStore.jsx');
import Griddle, { plugins } from 'griddle-react';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: DemoStore.getBikes()
        };
        this._onchange = this._onchange.bind(this);
    }

    _onchange() {
        this.setState({ bikes: DemoStore.getBikes() });
    }

    componentWillUnmount() {
        DemoStore.removeChangeListener(this._onchange);
    }

    componentDidMount() {
        DemoStore.addChangeListener(this._onchange);
        DemoActionCreator.getBikes();

    }

    render() {
        return (
            <div className="jumbotron">
                <Griddle
                    data={this.state.bikes}
                    plugins={[plugins.LocalPlugin]}/>
            </div>);

    }
}

