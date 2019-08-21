import React, { Component } from 'react'

export default class TodoInput extends Component {
  static defaultProps = {
    btnText: '添加'
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder}></input>
        <button type="btn">{this.props.btnText}</button>
      </div>
    )
  }
}
