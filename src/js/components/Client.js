'use strict';
import React from 'react';
import Moment from 'moment'

class Client extends React.Component {

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

export default Client
