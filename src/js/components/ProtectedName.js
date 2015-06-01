'use strict';
import React from 'react';
import Moment from 'moment'

class ProtectedName extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
      {Moment(this.props.details.addedAt, "x").fromNow()}
      </li>
    );
  }

};

export default ProtectedName
