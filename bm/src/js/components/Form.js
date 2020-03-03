import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Step from './Step.js';

class Form extends Component {
  constructor() {
    super();

    var url = new URL(window.location.href);
    this.state = {
      redirectTo: 'https://www.google.com.au',
      email: url.searchParams.get('email') || 'no email provided',
      step: 1,
      day: '1',
      q1: '',
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  handleChange(event, name) {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  nextStep() {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  }

  prevStep() {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step - 1,
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
        <Step currentStep={this.state.step} step={1}>
          <h1>Better Me</h1>
          <div>
            Welcome! Over the next four weeks we will help you establish a
            practice of coaching. This week we're focusing on the skill of
            asking questions.
          </div>

          <input type="button" onClick={this.nextStep} value="Next" />
        </Step>

        <Step currentStep={this.state.step} step={2}>
          <div>
            Do you know why it is important to ask your mentees questions before
            giving advice?
          </div>
          {/*          <input
            type="text"
            name="q1"
            value={this.state.q1}
            onChange={e => this.handleChange(e, 'q1')}
          />*/}

          <div>
            <input type="radio" id="q1yes" name="q1" value="yes" />
            <label htmlFor="q1yes">Yes, I am pretty confident I know why</label>
            <br />
            <input type="radio" id="q1no" name="q1" value="no" />
            <label htmlFor="q1no">No, please remind me</label>
          </div>

          <input type="button" onClick={this.prevStep} value="Previous" />
          <input type="button" onClick={this.nextStep} value="Next" />
        </Step>

        <Step currentStep={this.state.step} step={3}>
          <h1>That's Great! In any case here is a reminder.</h1>
          <div>
            It's important to ask questions before giving advice because…
          </div>
          <ol>
            <li>You can be confident you’ve understood them</li>
            <li>You will help them clarify their thinking</li>
            <li>They will take ownership of the solutions they come to </li>
            <li>They will see you as a more valuable mentor</li>
          </ol>

          <input type="button" onClick={this.prevStep} value="Previous" />
          <input type="button" onClick={this.nextStep} value="Next" />
        </Step>

        <Step currentStep={this.state.step} step={4}>
          <h1>Speaking of asking questions, we've got a few for you...</h1>

          <div>
            To track your progress we're going to ask four questions about your
            one on ones. This will also help us personalise your experience.
          </div>
          <input type="button" onClick={this.prevStep} value="Previous" />
          <input type="button" onClick={this.nextStep} value="Next" />
        </Step>

        <Step currentStep={this.state.step} step={5}>
          <div>
            That’s it for day one! Over the course of this week we are going to
            supercharge your coaching ability.
          </div>
          <input type="button" onClick={this.prevStep} value="Previous" />
          <input type="submit" value="Submit" />
        </Step>
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
