import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        })
    }

    handleChange = (event) =>{
        this.setState({
            firstname: event.target.value,
        })
        console.log(event.target.value)
    };
    handleLastNameChange = (event) =>{
        this.setState({
            lastname: event.target.value,
        });
    };

  render() {
    return (
      <div>Form
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' value = {this.state.firstname} />
            <input onChange={this.handleLastNameChange} type='text' value = {this.state.lastname} />
            <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }
}
