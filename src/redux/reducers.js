import {combineReducers} from 'redux';
import authReducer from './auth/reducers';
import loginReducer from 'src/screens/Login/redux';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
});

export default rootReducer;
