"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapPager } from 'griddle-react-bootstrap';

var DemoActionCreator = require('../../actions/DemoActionCreator.jsx');
var DemoStore = require('../../stores/DemoStore.jsx');
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

const ImageComponent = ({ value }) => <img src={value} width="100%"></img>;

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
                Table: 'table table-bordered table-striped table-hover'
            },
            styles: {
                Filter: {  },
                Table: { border: "0.5px solid #555 " },
            }
        }

        return (
            <div className="jumbotron">
                <Griddle
                    data={this.state.bikes}
                    plugins={[plugins.LocalPlugin]}
                    styleConfig={styleConfig}
                    customPagerComponent={BootstrapPager}>
                    <RowDefinition>
                        <ColumnDefinition id="Model" title="Model" width={150}/>
                        <ColumnDefinition id="Frame" title="Frame" width={150} />
                        <ColumnDefinition id="FrameSeries" title="Frame Series" width={150} />
                        <ColumnDefinition id="Fork" title="Fork" width={150}/>
                        <ColumnDefinition id="Computer" title="Computer" width={150} />
                        <ColumnDefinition id="Weight" title="Weight" width={150} />
                        <ColumnDefinition id="Price" title="Price" width={150} />
                        <ColumnDefinition id="Image" title="Image" width={150} height={150} customComponent={ImageComponent} />
                    </RowDefinition>
                </Griddle>
            </div>);

    }
}

