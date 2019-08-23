import React from 'react'

export default function TodoItem(props) {
  return (
    <li onClick={props.changeState.bind(this, props.id)}>
      {props.title} {props.status ? '成功' : '失败'}
    </li>
  )
}
