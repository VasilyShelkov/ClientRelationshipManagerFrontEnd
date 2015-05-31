import React from 'react';
import Request from 'superagent';
import UnprotectedName from './UnprotectedName.js';
import ProtectedName from './ProtectedName.js';
import Client from './Client.js';

class Name extends React.Component {

    constructor(props) {
      super(props);
      this.state = {details: []};
    }

    componentDidMount() {
      Request
          .get('http://localhost:8080/' + this.props.accountId + '/'
          + this.props.nameType + '/' + this.props.name.nameId)
          .withCredentials()
          .end((error, response) => {
              this.setState({details: response.body});
          })
    }

    render() {
      var company = "";
      if (this.props.name.company == "") {
        company = "Unknown"
      }else {
        company = this.props.name.company
      };

      let details = "";
      switch (this.props.nameType) {
        case "unprotectedNames":
            details = <UnprotectedName
              details={this.state.details}
              accountId={this.props.accountId}>
              nameId={this.props.name.nameId}>
            </UnprotectedName>
        break;
        case "protectedNames":
            details = <Client
              details={this.state.details}
              accountId={this.props.accountId}>
              nameId={this.props.name.nameId}>
            </Client>
        break;
        case "clients":
            details = <ProtectedName
              details={this.state.details}
              accountId={this.props.accountId}>
              nameId={this.props.name.nameId}>
            </ProtectedName>
        break;
        default:

      }

      return (
        <li className="collection-item avatar col s12">
            <img src="" alt="" className="circle"></img>
            <ul>
              <div className="col s12 m6">
                <li className="col s4">
                  <span className="title">
                    <h6 className="grey-text text-darken">
                    {this.props.name.firstName} {this.props.name.otherNames}
                    </h6>
                  </span>
                </li>

                <li className="col s4">
                  <p>
                    <i className="small mdi-communication-business"></i>
                    {company}<br></br>
                  </p>
                </li>

                <li className="col s4">
                  <p>
                    <i className="tiny mdi-hardware-phone-android"></i>
                    {this.props.name.mobileNumber}
                    <br></br>
                    <i className="tiny mdi-communication-call"></i>
                    {this.props.name.officeNumber}
                  </p>
                </li>
              </div>

              <div className="col s12 m6">
                {details}
              </div>
            </ul>
        </li>
      );
    }
}

export default Name;
