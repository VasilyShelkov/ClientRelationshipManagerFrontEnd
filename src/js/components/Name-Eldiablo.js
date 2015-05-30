import React from 'react';

class Name extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      var company = "";
      if (this.props.name.company == "") {
        company = "Unknown"
      }else {
        company = this.props.name.company
      };

      return (
          <div className="card z-depth-2">

            <div className="card-content">
              <span className="card-title grey-text text-darken">
              {this.props.name.firstName} {this.props.name.otherNames}
              </span>

              <p>
              Work at {company}
              </p>
              <p>
              {this.props.name.mobileNumber}
              {this.props.name.officeNumber}
              </p>
            </div>

            <div className="card-action hide">
              <a className="waves-effect waves-teal btn-flat">Protect</a>
              <a className="waves-effect waves-teal btn-flat">Update</a>
              <a className="waves-effect waves-teal btn-flat">Delete</a>
            </div>

          </div>
      );
    }
}

export default Name;
