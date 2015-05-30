import React from 'react';
import NameList from './NameList.react';
import NameStore from '../stores/NameStore.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import NameActions from '../actions/NameActions.js';
import './button.css';

class NameBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      names: NameStore.getNames(),
    };
  }

  setNames() {
    this.setState({
        names: NameStore.getNames(),
    });
  }

  componentDidMount() {
    NameStore.addChangeListener(this._onChange.bind(this));

    NameActions.loadAllUnprotectedNames(this.props.accountId);
  }

  componentWillUnmount() {
    NameStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    let namesStyle = {
      marginTop:'15px',
      paddingLeft: '15px',
      paddingRight: '15px'
    }

    return (
      <div style={namesStyle}>
        <div className="row">
          <div className="col s12">
            <h3>
              <i className="medium mdi-social-people"></i> Names
            </h3>
          </div>
        </div>

        <button className="waves-effect waves-light btn-large btn-flat"
        onClick={this._onLoadUnprotectedNames.bind(this)}>
          Unprotected
        </button>
        <button className="waves-effect waves-light btn-large btn-flat"
        onClick={this._onLoadProtectedNames.bind(this)}>
          Protected
        </button>
        <button className="waves-effect waves-light btn-large btn-flat"
        onClick={this._onLoadClients.bind(this)}>
          Client
        </button>

        <NameList names={this.state.names} nameType={this.state.nameType}
        accountId={this.props.accountId}></NameList>
      </div>
    )
  }

  _onChange(data) {
        this.setNames();
  }

  _onLoadUnprotectedNames() {
    NameActions.loadAllUnprotectedNames(this.props.accountId);
  }

  _onLoadProtectedNames() {
    NameActions.loadAllProtectedNames(this.props.accountId);
  }

  _onLoadClients() {
    NameActions.loadAllClients(this.props.accountId);
  }
}

export default NameBox;
