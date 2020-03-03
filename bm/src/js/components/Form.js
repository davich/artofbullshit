import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
  constructor() {
    super();

    var url = new URL(window.location.href);
    this.state = {
      value: '',
      email: url.searchParams.get('email') || 'no email provided',
      day: '1',
      redirectTo: 'https://www.google.com.au',
      step: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        ...prevState,
        value,
      };
    });
  }

  nextStep(event) {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  }

  render() {
    return (
      <form
        action="https://getsimpleform.com/messages?form_api_token=cef459a88cc906188482465c742d8b73"
        method="post"
      >
        <input type="hidden" name="redirect_to" value={this.state.redirectTo} />
        <input type="hidden" name="email" value={this.state.email} />
        <input type="hidden" name="day" value={this.state.day} />

        <div style={{ display: this.state.step == 1 ? 'block' : 'none' }}>
          Here is some text
          <input
            type="text"
            name="test"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="button" onClick={() => this.nextStep()} value="Next" />
        </div>

        <div style={{ display: this.state.step == 2 ? 'block' : 'none' }}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
