import React from 'react'

export default function TodoItem(props) {
  return (
    <li>
      {props.title} {props.status ? '成功' : '失败'}
    </li>
  )
}
