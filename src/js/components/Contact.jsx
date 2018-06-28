"use strict";

import React from 'react';

export default class Home extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-2">
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/35847092_618682645173282_2651389238599221248_n.jpg?_nc_cat=0&oh=b479ede4bbbf486280319e10cb8f4ff6&oe=5BEB97BB" height="100%" width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h2>Ne găsiți la adresa  ecobikes@clujnapoca.ro <br /><br />
                            Luni - Vineri: 08:00 - 22:00<br />
                            Sâmbătă, Duminică - ÎNCHIS</h2>
                    </div>
                </div>

            </div> );

    }
}

