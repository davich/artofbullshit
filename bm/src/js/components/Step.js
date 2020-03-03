import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Step extends Component {
  render() {
    return (
      <div
        style={{
          display: this.props.step == this.props.currentStep ? 'block' : 'none',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Step;
