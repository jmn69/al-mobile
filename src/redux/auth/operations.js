import {getCurrentUser} from 'common/utils/asyncStorage';
import {request} from 'common/utils/authRequest';
import {setAuthCheckIsLoading} from './actions';
import Toast from 'react-native-root-toast';

const authCheck = () => {
  return async dispatch => {
    dispatch(setAuthCheckIsLoading(true));
    const user = await getCurrentUser();
    if (!user) {
      dispatch(setAuthCheckIsLoading(false));
      return Promise.resolve(false);
    }
    try {
      const response = await request({endpoint: `users/${user.id}`});
      if (!response || response.status !== 200) {
        dispatch(setAuthCheckIsLoading(false));
        return Promise.resolve(false);
      }
      dispatch(setAuthCheckIsLoading(false));
      return Promise.resolve(true);
    } catch (e) {
      Toast.show(e.toString(), {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      dispatch(setAuthCheckIsLoading(false));
      return Promise.resolve(false);
    }
  };
};
export default {
  authCheck,
};
