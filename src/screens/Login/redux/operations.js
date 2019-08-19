import {setCurrentUser} from 'common/utils/asyncStorage';
import makeBasicAPIActions from 'common/utils/makeBasicAPIActions';
import {ROOT_API} from 'react-native-dotenv';
import {Actions} from 'react-native-router-flux';

const login = makeBasicAPIActions(
  'LOGIN',
  (request, success, failure) => formData => {
    return async dispatch => {
      dispatch(request());
      let response;
      try {
        response = await fetch(`${ROOT_API}auth/login`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }
      if (response.ok) {
        try {
          const user = await response.json();
          const {username, id, accessToken, refreshToken} = user;
          setCurrentUser(id, accessToken, refreshToken);
          dispatch(success({username, id}));
          // TODO: Redirect to initial url if there is one
          Actions.replace('drawer');
          return Promise.resolve({username, id});
        } catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      } else if (response.status === 404) {
        dispatch(failure('The username and password do not match'));
        return Promise.reject();
      } else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  },
);

export default {login};
