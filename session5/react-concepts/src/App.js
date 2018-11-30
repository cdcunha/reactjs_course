import React, { Component } from 'react';
import Alert, { DismissableComponent, AnimatedAlert } from './ui-components/Alert';


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
        <Alert type="success" toogleAlert={this.toogleAlert} show={this.state.showAlert}>
          <small>small message</small>
        </Alert>
        <Alert type="info" 
               toogleAlert={this.toogleAlert} 
               show={this.state.showAlert} 
               message="Database is almost full." />
        <DismissableComponent type="info" toogleAlert={this.toogleAlert} show={this.state.showAlert}>
          <h2 className="alert-heading">This is an alert heading</h2>
        </DismissableComponent>
        <AnimatedAlert type="warning" toogleAlert={this.toogleAlert} show={this.state.showAlert} message="Animated Alert" />
      </div>
    );
  }
}

export default App;
