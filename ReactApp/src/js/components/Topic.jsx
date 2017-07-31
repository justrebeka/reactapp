"use strict";

import React from 'react';

export default class Topic extends React.Component {
    render() {

        return (
            <div>
               {this.props.index}. &nbsp;{this.props.name} &nbsp;
            </div>
        );
    }
}