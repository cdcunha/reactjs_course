import React, { Component } from 'react';
import Alert from './ui-components/Alert';


class App extends Component {
  constructor() {
    super();
    this.state = {
      showAlert: true
    }

    this.toogleAlert = this.toogleAlert.bind(this);
  }

  toogleAlert() {
    this.setState({
      showAlert: !this.state.showAlert
    })
  }

  render() {
    return (
      <div className="container">
        <Alert type="warning" toogleAlert={this.toogleAlert} show={this.state.showAlert}>
          <small>Small message</small>
        </Alert>
        <Alert type="success" toogleAlert={this.toogleAlert} show={this.state.showAlert}>
          <h2 className="alert-heading">This is an alert heading</h2>
        </Alert>
        <Alert type="info" 
               toogleAlert={this.toogleAlert} 
               show={this.state.showAlert} 
               message="Database is almost full." />
      </div>
    );
  }
}

export default App;
