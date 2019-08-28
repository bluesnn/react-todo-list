import React, { Component, Fragment } from 'react'

function Copyright(MyComponent) {
  return class CopyRightComponent extends Component {
    render() {
      console.log(this)
      return (
        <Fragment>
          <MyComponent {...this.props}/><br />
          Copyright<br />
        </Fragment>
      )
    }
  }
}

export default Copyright
