import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Navbar, Button } from 'react-bootstrap';

export default class BikeDetails extends React.Component {
    constructor() {
        super();   
    }

    render() {
        return (
            <div>
                 <Modal
                    isOpen={!!this.props.bike}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    contentLabel="Example Modal">
                   
                    <p>Model: {this.props.bike.Model}</p>
                    <p>Cadru: {this.props.bike.Frame}</p>
                    <p>Furca: {this.props.bike.Fork}</p>
                    <p>Ghidon: {this.props.bike.Handlebar}</p>
                    <Button onClick={this.props.closeModal}>Close</Button>
                    <Button onClick={this.props.order}>Order</Button>
                    <Button onClick={this.props.testBike}>Test Ride</Button>
                   
                 
                </Modal>
            </div>
        );
    }
}
