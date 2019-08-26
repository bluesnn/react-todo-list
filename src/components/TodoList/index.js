import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  state = {
    title: 'item'
  }

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })).isRequired
  }

  render() {
    return (
      <ul>
        {
          this.props.list.map(el => {
            return (
              <TodoItem
                key = {el.id}
                changeState={this.props.changeState}
                {...el}
              />
            )
          })
        }
      </ul>
    )
  }
}
