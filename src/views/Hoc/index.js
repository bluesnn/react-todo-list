import React, { Component, Fragment } from 'react';
import User from './User';

class Hoc extends Component {
  render() {
    return (
      <Fragment>
        <User msg="传递" />
        index
      </Fragment>
    );
  }
}

export default Hoc;