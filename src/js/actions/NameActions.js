import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Request from 'superagent';

class NameActions {

  loadAllUnprotectedNames(accountId) {
    Request
      .get('http://localhost:8080/names/unprotected/account/' + accountId)
      .withCredentials()
      .end((error, response) => {
        this.onLoad(response.body, 'RECIEVE_UNPROTECTED_NAMES')
      })
  }

  loadAllProtectedNames(accountId) {

    Request
      .get('http://localhost:8080/names/protected/account/' + accountId)
      .withCredentials()
      .end((error, response) => {
        this.onLoad(response.body, 'RECIEVE_PROTECTED_NAMES')
      })
  }

  loadAllClients(accountId) {
    Request
        .get('http://localhost:8080/names/client/account/' + accountId)
        .withCredentials()
        .end((error, response) => {
          this.onLoad(response.body, 'RECIEVE_CLIENTS')
        });
  }

  onLoad(names, action) {
    AppDispatcher.handleViewAction({
        actionType: action,
        data: names
    });
  }
}

let nameActions = new NameActions();

export default nameActions;
