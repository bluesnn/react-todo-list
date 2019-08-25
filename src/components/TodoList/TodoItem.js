import React from 'react'

export default function TodoItem(props) {
  const handleCheckboxChange = () => {
    console.log(1)
  }

  return (
    <li onClick={props.changeState.bind(this, props.id)}>
      <input
        type="checkbox"
        checked={props.status}
        onChange={handleCheckboxChange}
      />
      {props.title} {props.status ? '成功' : '失败'}
    </li>
  )
}
