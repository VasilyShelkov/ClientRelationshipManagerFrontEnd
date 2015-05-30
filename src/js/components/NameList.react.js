import React from 'react';
import Name from './Name.js';
import './button.css'

class NameList extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      var names = this.props.names.map((name) => {
          return (
            <Name
              name={name}
              nameType={this.props.nameType}
              accountId={this.props.accountId}>
            </Name>
          );
      });

      return (
        <div className="row">
          <ul className="collection">
            {names}
          </ul>
        </div>
      );
    }
}

export default NameList;
