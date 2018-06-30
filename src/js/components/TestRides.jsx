"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var DemoActionCreator = require('../../actions/DemoActionCreator.jsx');
var DemoStore = require('../../stores/DemoStore.jsx');
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        var a = props.auth.getProfile(() => { });
        this.state = {
            testRides:  []
        };
        this._onchange = this._onchange.bind(this);
    }

    _onchange() {
        this.setState({ testRides: DemoStore.getTestRides(this.props.userId) });
    }

    componentWillUnmount() {
        DemoStore.removeChangeListener(this._onchange);
    }

    componentDidMount() {
        var a = this.props.auth.getProfile(() => { });
        DemoStore.addChangeListener(this._onchange);
        DemoActionCreator.getTestRides(a.sub);

    }

    render() {
        const styleConfig = {
            icons: {
                TableHeadingCell: {
                    sortDescendingIcon: <small>(desc)</small>,
                    sortAscendingIcon: <small>(asc)</small>,
                },
            },
            classNames: {
                Row: 'row-class',
            },
            styles: {
                Filter: { fontSize: 18 },
                Table: { border: "0.5px solid #555 " },
            }
        }

        return (
            <div className="jumbotron">
                <Griddle
                    data={this.state.testRides}
                    plugins={[plugins.LocalPlugin]}
                    styleConfig={styleConfig}>
                  
                </Griddle>
            </div>);
    }
}

