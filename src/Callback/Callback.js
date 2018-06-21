import React, { Component } from 'react';
class Callback extends Component {

    componentDidMount() {
        // delay going to home page to give time authJs to setup the login.
        // normaly it shouldn't have been done by setting href, but by using history.push or history.replace
        setTimeout(() => {
            window.location.href = "/home";
        }, 1500)
    }

  render() {
      return (
          <div className="login-loader-wrapper">
              <div className="login-loader"></div>
          </div>
      );
  }
}

export default Callback;