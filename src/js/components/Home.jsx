"use strict";

import React from 'react';

export default class Home extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-10">
                        <img src="https://www.islabikes.com/wp-content/uploads/2015/10/Cnoc16-Red-MY2016-SRGB-USA1.jpg" height="100%" width="100%" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2> Bani economisiti si timp salvat pe doua roti!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2> Mai putine roti, mai multa distractie!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="aaa"> 
                            <li>De editat</li>
                            <li>Eficienta - Mai rapid ca masina sau autobuzul</li>
                            <li>Economie - Fara costuri de transport</li>
                            <li>Sanatate - Miscare usoara zilnica</li>
                            <li>100% ecologic - Sursa de energie naturala</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src="https://www.perfectbike.ro/image/data/Merida/2018/MATTS%206.10-V%20BLK.jpg" height="100%" width="100%"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://wtop.com/wp-content/uploads/2017/05/051617_bike_dildine.jpg" height="100%" width="100%" />
                    </div>
                    <div className="col-md-6">
                        <p> Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard
                            a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru
                            a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut
                            saltul în tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea colilor Letraset
                            care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker
                            care includeau versiuni de Lorem Ipsum.</p>
                    </div>
                    <div className="col-md-2">
                        <img src="https://www.mariciu.ro/wp-content/uploads/2018/04/haos-pe-trotineta.jpg" height="100%" width="100%" />
                    </div>
                </div>

            </div> );

    }
}