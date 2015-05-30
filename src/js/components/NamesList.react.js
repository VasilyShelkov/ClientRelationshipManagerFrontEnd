import React from 'react';
import Request from 'superagent';
import Name from './Name.js';

class NamesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {names: []};
    }

    componentDidMount() {
        Request
            .get('http://localhost:8080/names/unprotected/account/1')
            .withCredentials()
            .end((error, response) => {
                this.setState({names: response.body});
            })
    }

    render() {
        var names = this.state.names.map((name) => {
            return (<Name name={name}></Name>);
        });

        return (
            <div className="z-depth-1">
                <div className="row indigo lighten-5">
                  <div className="col s12">
                    <h3>
                      <i className="medium mdi-social-people"></i> Names
                    </h3>
                  </div>
                </div>
                <div className="row">
                {names}
                </div>
            </div>
        );
    }
}

export default NamesList;
