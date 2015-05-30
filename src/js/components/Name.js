import React from 'react';
import Request from 'superagent';

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

      return (
        <li className="collection-item avatar col s12">
            <img src="" alt="" className="circle"></img>
            <ul>
                <li className="col m3">
                  <span className="title">
                    <h5 className="grey-text text-darken">
                    {this.props.name.firstName} {this.props.name.otherNames}
                    </h5>
                  </span>
                </li>

                <li className="col m2">
                  <p>
                    <i className="small mdi-communication-business"></i>
                    {company}<br></br>
                  </p>
                </li>

                <li className="col m2">
                  <p>
                    <i className="tiny mdi-hardware-phone-android"></i>
                    {this.props.name.mobileNumber}
                    <br></br>
                    <i className="tiny mdi-communication-call"></i>
                    {this.props.name.officeNumber}
                  </p>
                </li>

                <li>
                  {this.props.children}
                </li>
            </ul>
        </li>
      );
    }
}

export default Name;
