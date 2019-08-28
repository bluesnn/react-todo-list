import React, { Fragment } from 'react'
import CopyRight from './Copyright'

function User(props) {
  return (
    <Fragment>
      {console.log(props)}
      User
    </Fragment>
  )
}

export default CopyRight(User)
