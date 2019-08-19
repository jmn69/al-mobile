import Toast from 'react-native-root-toast';

export default (REQUEST, SUCCESS, FAILURE) => {
  return (state, action) => {
    if (!state) {
      state = {
        isLoading: false,
        error: null,
        data: null,
      };
    }
    switch (action.type) {
      case REQUEST:
        return {...state, isLoading: true, error: null};
      case SUCCESS: {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
          error: null,
        };
      }
      case FAILURE:
        Toast.show(action.payload.toString(), {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
        return {...state, isLoading: false, error: action.payload};
      default:
        return state;
    }
  };
};
