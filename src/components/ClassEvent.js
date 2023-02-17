import React, { Component } from 'react'

export default class ClassEvent extends Component {
    handleClick(){
        console.log('button is clicked here...')
    }
    render() {
    return (
      <div>
        <h1>this is class based component</h1>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    )
  }
}
