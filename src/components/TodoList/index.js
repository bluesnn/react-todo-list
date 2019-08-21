import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  state = {
    title: 'item'
  }

  render() {
    return (
      <ul>
        {
          this.props.list.map(el => {
            return (
              <TodoItem
                key = {el.id}
                // title = {el.title}
                // status = {el.status}
                {...el}
              />
            )
          })
        }
      </ul>
    )
  }
}
