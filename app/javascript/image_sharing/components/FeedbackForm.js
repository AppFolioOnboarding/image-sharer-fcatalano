import React from 'react';
import { post } from '../utils/helper';

export default class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { statusMessage: '', statusColor: 'black' };
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = { feedback: {
      name: event.target.name.value,
      comments: event.target.comments.value,
    } };

    post('/api/feedbacks', formData)
      .then((response) => {
        this.setStatusMessage(response.message, 'green');
      })
      .catch((response) => {
        if (response.data) {
          this.setStatusMessage(response.data.message, 'red');
        } else {
          this.setStatusMessage('An unknown error has occurred', 'red');
        }
      });
  }

  setStatusMessage = (message, color) => {
    this.setState({ statusMessage: message, statusColor: color });
    setTimeout(() => {
      this.setState({ statusMessage: '', statusColor: 'black' });
      this.clearForm();
    }, 2000);
  }

  clearForm = () => {
    document.getElementById('feedback-form').reset();
    this.setState({ statusMessage: '', statusColor: 'black' });
  }

  render() {
    return (
      <form
        id='feedback-form'
        onSubmit={this.handleSubmit}
        style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: '275px' }}
      >
        <label htmlFor='name' style={{ marginBottom: '0px', display: 'block' }} >
        Your Name:
          <input id='name' type='text' name='name' size={75} style={{ display: 'block' }} />
        </label>
        <label htmlFor='comments' style={{ marginBottom: '0px', display: 'block' }} >
        Comments:
          <textarea id='comments' name='comments' rows={5} cols={75} style={{ display: 'block' }} />
        </label>
        <input type='submit' value='Submit' style={{ color: 'white', backgroundColor: 'blue' }} />
        <span style={{ color: this.state.statusColor }}>
          <strong>{this.state.statusMessage}</strong>
        </span>
      </form>

    );
  }
}
