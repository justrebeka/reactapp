"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapPager } from 'griddle-react-bootstrap';
import BikeDetails from './BikeDetails.jsx';
import { Navbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

var DemoActionCreator = require('../../actions/DemoActionCreator.jsx');
var DemoStore = require('../../stores/DemoStore.jsx');
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

const ImageComponent = ({ value }) => <img src={value} width="100%"></img>;

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: DemoStore.getBikes(),
            bikeId: undefined
        };
        this._onchange = this._onchange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.order = this.order.bind(this);
        this.testBike = this.testBike.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal({ value, griddleKey, rowData }) {
        this.setState({ bike: rowData });
    }

    orderCallback(err, profile) {
        console.log(profile.sub);

        }

    order(bikeId) {

        var a = this.props.auth.getProfile(this.orderCallback);
        DemoActionCreator.createOrder(a.sub, bikeId);        
    }

    testBike(bikeId) {

        var a = this.props.auth.getProfile(() => { });
        DemoActionCreator.testBike(a.sub, bikeId, date);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ bike: undefined });
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

        const rowDataSelector = (state, { griddleKey }) => {
            return state
                .get('data')
                .find(rowMap => rowMap.get('griddleKey') === griddleKey)
                .toJSON();
        };

        const enhancedWithRowData = connect((state, props) => {
            return {
                // rowData will be available into MyCustomComponent
                rowData: rowDataSelector(state, props)
            };
        });

        const ViewDetails = ({ value }) => <Button
            id="qsLogoutBtn"
            bsStyle="primary"
            className="btn-margin"
            onClick={this.openModal.bind(this)}></Button>;

        const MyCustomComponent = ({ value, griddleKey, rowData }) => 
         
                <div className="MyCustomComponent">
                <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={() => this.openModal.bind(this)({ value, griddleKey, rowData })}> View details</Button>
                </div>;
       

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
                        <ColumnDefinition id="View" title="View" width={150} height={150} customComponent={enhancedWithRowData(MyCustomComponent)} />
                    </RowDefinition>
                </Griddle>
                {!!this.state.bike && (<BikeDetails
                    bike={this.state.bike}
                    onAfterOpen={this.afterOpenModal}
                    closeModal={this.closeModal}
                    order={() => this.order.bind(this)(this.state.bike.Id)}
                        contentLabel="Bike details"
                    ></BikeDetails>)}
            </div>);

    }
}

