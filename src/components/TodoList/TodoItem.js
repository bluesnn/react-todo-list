import React, { memo } from 'react'

function TodoItem(props) {
  const handleCheckboxChange = () => {}
  const handleClick = id => {
    props.changeState(id)
  }

  return (
    <li onClick={handleClick.bind(this, props.id)}>
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