"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var DemoActionCreator = require('../../actions/DemoActionCreator.jsx');
var DemoStore = require('../../stores/DemoStore.jsx');

import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

const ImageComponent = ({ value }) => <img src={value} width="100%"></img>;

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {         
            orders: []
        };
        this._onchange = this._onchange.bind(this);
    }

    _onchange() {
        this.setState({ orders: DemoStore.getOrders() });
    }

    componentWillUnmount() {
        DemoStore.removeChangeListener(this._onchange);
    }

    componentDidMount() {
        var a = this.props.auth.getProfile(() => { });
        DemoStore.addChangeListener(this._onchange);
        DemoActionCreator.getOrders(a.sub);

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
                    data={this.state.orders}
                    plugins={[plugins.LocalPlugin]}
                    styleConfig={styleConfig}>
                    <RowDefinition>
                        <ColumnDefinition id="Id" title="Id" width={150} />
                        <ColumnDefinition id="Number" title="Number" width={150} />
                        <ColumnDefinition id="Model" title="Model" width={150} />
                        <ColumnDefinition id="Image" title="Image" width={150} height={150} customComponent={ImageComponent} />
                    </RowDefinition>
                </Griddle>
            </div>);

    }
}

