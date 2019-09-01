import React from 'react'

function CartItem(props) {
  console.log(props)
  return (
    <li>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </li>
  )
}

export default CartItem
