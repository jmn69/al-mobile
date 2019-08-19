import {combineReducers} from 'redux';
import authReducer from './auth/reducers';
import routerReducer from './router/reducers';
import loginReducer from 'src/screens/Login/redux';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  router: routerReducer,
});

export default rootReducer;
