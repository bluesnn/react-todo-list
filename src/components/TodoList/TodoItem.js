import React, { memo } from 'react'

function TodoItem(props) {
  const handleCheckboxChange = () => {}
  const handleClick = () => {
    props.changeState(props.id)
  }

  return (
    <li onClick={handleClick}>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={handleCheckboxChange}
      />
      {props.title} {props.completed ? '成功' : '失败'}
    </li>
  )
}

export default memo(TodoItem, (nextProps, prevProps) => nextProps.completed === prevProps.completed);