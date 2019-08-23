import React, { Component, createRef } from 'react'

export default class TodoInput extends Component {
  static defaultProps = {
    btnText: '添加'
  }

  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
    this.inputDom = createRef();
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }

  handleKeyUp = e => {
    e.keyCode === 13 && this.handleAddClick()
  }

  handleAddClick = () => {
    const value = this.state.inputValue;
    if (value.length === 0) return;
    this.props.addTodo(value);
    this.setState({
      inputValue: ''
    }, () => {
      this.inputDom.current.focus();
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          placeholder={this.props.placeholder}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          ref={this.inputDom}
        />

        <button
          type="btn"
          onClick={this.handleAddClick}
        >
          {this.props.btnText}
        </button>
      </div>
    )
  }
}
