import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
  : applyMiddleware(thunk);

const configureStore = createStore(rootReducers, composeEnhancers);

export default configureStore;
