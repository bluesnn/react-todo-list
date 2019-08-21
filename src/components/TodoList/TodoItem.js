import React from 'react'

export default function TodoItem(props) {
  console.log(props)
  return (
    <li>
      {props.title} {props.status ? '成功' : '失败'}
    </li>
  )
}
