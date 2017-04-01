import { createStore,compose } from 'redux';
import rootReducer from '../reducers';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import numberData from '../data/numberData'
//
// const defaultState = {
//   saveLogin:saveLogin
// };

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, enhancers);
// const state = store.getState()
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('../reducers/',() => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
