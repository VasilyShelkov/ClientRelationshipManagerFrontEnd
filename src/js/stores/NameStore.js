import AppDispatcher from '../dispatcher/AppDispatcher';
import events from 'events'

var _names = []
var _unprotectedNames = []
var _protectedNames = []
var _clients = []

class NameStore extends events.EventEmitter {

  constructor() {
    super();
  }

  getNames() {
    return _names;
  }

  setNames(names) {
    _names = names;
  }

  setUnprotectedNames(unprotectedNames) {
    _unprotectedNames = unprotectedNames;
  }

  setProtectedNames(protectedNames) {
    _protectedNames = protectedNames;
  }

  setClients(clients) {
    _clients = clients;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

let nameStore = new NameStore();

AppDispatcher.register((payload) => {
  let action = payload.action;

  switch (action.actionType) {

    case 'RECIEVE_UNPROTECTED_NAMES':
      nameStore.setUnprotectedNames(action.data);
      nameStore.setNames(action.data);
      nameStore.emitChange();
      break;

    case 'RECIEVE_PROTECTED_NAMES':
      nameStore.setProtectedNames(action.data);
      nameStore.setNames(action.data);
      nameStore.emitChange();
      break;

    case 'RECIEVE_CLIENTS':
      nameStore.setClients(action.data);
      nameStore.setNames(action.data);
      nameStore.emitChange();
      break;
    default:
      return true;

  }

  return true;
})

export default nameStore;
