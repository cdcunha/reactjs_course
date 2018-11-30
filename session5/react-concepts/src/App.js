import React, { Component } from 'react';
import Alert from './ui-components/Alert';


class App extends Component {
  constructor() {
    super();
    this.state = {
      showAlert: true
    }
  }

  render() {
    return (
      <div className="container">
        <Alert type="warning" show={this.state.showAlert}>
          <small>Small message</small>
        </Alert>
        <Alert type="success">
          <h2 className="alert-heading">This is an alert heading</h2>
        </Alert>
        <Alert type="info" message="Database is almost full." />
      </div>
    );
  }
}

export default App;
