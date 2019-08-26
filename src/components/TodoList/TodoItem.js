import React from 'react'

function TodoItem(props) {
  const handleCheckboxChange = () => {}

  return (
    <li onClick={props.changeState.bind(this, props.id)}>
    {console.log("56")}
      <input
        type="checkbox"
        checked={props.status}
        onChange={handleCheckboxChange}
      />
      {props.title} {props.status ? '成功' : '失败'}
    </li>
  )
}

function areEqual(prevProps, nextProps) {
  console.log(prevProps, nextProps)
  if (prevProps.status === nextProps.status) {
    return true
  }else {
      return false
  }
}

export default React.memo(TodoItem, areEqual);