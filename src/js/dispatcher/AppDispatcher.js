import Flux from 'flux'

class AppDispatcher extends Flux.Dispatcher {
  constructor() {
    super();
  }

  handleViewAction(action) {
    this.dispatch({
      source:'VIEW_ACTION',
      action: action
    })
  }
}

let appDispatcher = new AppDispatcher();

export default appDispatcher;
