import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false
    }
  }

  handleLike = () => {
  //   this.setState({
  //     isLike: !this.state.isLike
  //   })
  console.log(this)
    this.setState((state, props) => {
      return {
        isLike: !state.isLike
      }
    });
  }

  render() {
    return (
      <div>
        <span onClick={this.handleLike}>
          {this.state.isLike ? '❤️' : '💔'}
        </span>
      </div>
    )
  }
}
