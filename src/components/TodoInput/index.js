import React, { Component } from 'react'

export default class TodoInput extends Component {
  static defaultProps = {
    btnText: '添加'
  }

  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }

  handleAddClick = () => {
    const value = this.state.inputValue;
    if (value.length === 0) return;
    this.props.addTodo(value)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          placeholder={this.props.placeholder}
          onChange={this.handleInputChange}
        />

        <button type="btn" onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
