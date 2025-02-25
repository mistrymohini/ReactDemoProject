import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:''
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange=(event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`User Name: ${this.state.username} Comment: ${this.state.comment} Topic: ${this.state.topic}`);
        event.preventDefault();
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                User Name: <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
            </div>
            <div>
                Comment: <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
            </div>
            <div>
                Topic: 
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
  }
}

export default Form