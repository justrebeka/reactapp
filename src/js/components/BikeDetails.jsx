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
                        <div className='col-md-12'>
                            <p className='denumire'>Model: {this.props.bike.Model}</p>
                            <p className='bani'>Pret: {this.props.bike.Price} lei</p><br />
                        </div>
                        <div className='col-md-6'>
                            <p>Cadru: {this.props.bike.Frame}</p>
                            <p>Furca: {this.props.bike.Fork}</p>
                            <p>Ghidon: {this.props.bike.Handlebar}</p>
                            <p>Computer: {this.props.bike.Computer}</p>
                            <p>Greutate: {this.props.bike.Weight} kg</p>
                            <p>Inaltime: {this.props.bike.RiderHeight} cm</p>
                            <p>Lant: {this.props.bike.Chain}</p>
                            <p>Sa: {this.props.bike.Saddle}</p>
                            <p>Manete Frane: {this.props.bike.BreakLevers}</p>
                            <p>Incarcatura Maxima: {this.props.bike.MaxLoad} kg</p>
                            <p>Suspensie Cadru: {this.props.bike.FrameSuspension}</p>
                            <p>Suspensie Furca: {this.props.bike.ForkSuspension}</p>
                            <p>Manete Schimbatoare: {this.props.bike.ShiftLevers}</p>
                            <p>Schimbator Spate: {this.props.bike.RearGear}</p>
                            <p>Schimbator Fata: {this.props.bike.FrontGear}</p>
                            <p>Frane: {this.props.bike.Breaks}</p>
                            <p>Jante: {this.props.bike.Rims}</p>
                            <p>Serie Cadru: {this.props.bike.FrameSeries}</p>
                            <p>Pedale: {this.props.bike.Pedals}</p>
                        </div>

                        <div className='col-md-4'>
                            <img src={this.props.bike.Image} width='100%' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xs-1'>
                            <Button className='btn btn-primary' onClick={this.props.closeModal}>Back</Button>
                        </div>
                        {!!this.props.isAuthenticated && (
                            <div className='col-xs-1'>
                                <Button className='btn btn-danger pull-right' onClick={this.props.order} >Order</Button>
                            </div>)}
                        {!!this.props.isAuthenticated && (
                            <div className='col-xs-1'>
                                <Button className='btn btn-danger' onClick={this.props.testBike}>Test Ride</Button>
                            </div>)}
                    
                    </div>
                    
               
                 
                </Modal>
            </div>
        );
    }
}
