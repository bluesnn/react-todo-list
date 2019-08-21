import React from 'react'

export default function TodoHeader(props) {
  console.log(props)
  return (
    <div>
      <h2>{props.desc}</h2>
      <p>{props.children}</p>
    </div>
  )
}
