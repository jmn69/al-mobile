import types from './types';

const INITIAL_STATE = {
  currentScene: '',
};
const routerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_SCENE:
      return {
        ...state,
        currentScene: action.payload,
      };
    default:
      return state;
  }
};

export default routerReducer;
