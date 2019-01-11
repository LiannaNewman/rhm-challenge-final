import React, { Component } from 'react'
import Link from 'next/link'
import { Button, Form } from 'semantic-ui-react'

class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    //this.submitGuestInfo = this.submitGuestInfo.bind(this);
    this.viewGuestBook = this.viewGuestBook.bind(this);
  };

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  // submitGuestInfo(data) {
  //   event.preventDefault();
  //   let data = {
  //     name: this.state.name,
  //     message: this.state.message
  //   };
  //   fetch('/api/guestbook', {
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((res) => {
  //     res.status === 200 ? this.setState({ submitted: true }) : ''
  //   })
  // }

  viewGuestBook() {
    window.location = '/guestbook';
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitGuestInfo}>
          <Form.Field>
            <label> Name </label>
            <input placeholder='Harry Potter' value={this.state.name} onChange={this.handleNameChange} />
          </Form.Field>
          <Form.Field>
            <label>Message</label>
            <textarea  placeholder='Message' value={this.state.message} onChange={this.handleMessageChange} />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        <Button onClick={this.viewGuestBook}> View Guest Book </Button>
      </div>
    )
  }
}
export default GuestForm
