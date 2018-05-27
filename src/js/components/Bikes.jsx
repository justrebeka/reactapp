"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var DemoActionCreator = require('../../actions/DemoActionCreator.jsx');
var DemoStore = require('../../stores/DemoStore.jsx');
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

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
                    data={this.state.bikes}
                    plugins={[plugins.LocalPlugin]}
                    styleConfig={styleConfig}>
                    <RowDefinition>
                        <ColumnDefinition id="Model" title="Model" width={150}/>
                        <ColumnDefinition id="Frame" title="Frame" width={150} />
                        <ColumnDefinition id="Fork" title="Fork" width={150}/>
                        <ColumnDefinition id="Computer" title="Computer" width={150} />
                        <ColumnDefinition id="Weight" title="Weight" width={150} />
                        <ColumnDefinition id="Price" title="Price" width={150} />
                    </RowDefinition>
                </Griddle>
            </div>);

    }
}

