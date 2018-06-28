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

                    <div className='row'>
                        <div className='col-md-6'>
                            <p>Model: {this.props.bike.Model}</p>
                            <p>Cadru: {this.props.bike.Frame}</p>
                            <p>Furca: {this.props.bike.Fork}</p>
                            <p>Ghidon: {this.props.bike.Handlebar}</p>
                            // pui aici restul proprietatilor
                        </div>

                        <div className='col-md-6'>
                            <img src={this.props.bike.Image} width='50%' height='50%' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xs-1'>
                            <Button className='btn btn-primary' onClick={this.props.closeModal}>Close</Button>
                        </div>
                        <div className='col-xs-1'>
                            <Button className='btn btn-primary' onClick={this.props.order}>Order</Button>
                        </div>
                        <div className='col-xs-1'>
                            <Button className='btn btn-primary' onClick={this.props.testBike}>Test Ride</Button>
                        </div>
                    
                    </div>
                    
               
                 
                </Modal>
            </div>
        );
    }
}
