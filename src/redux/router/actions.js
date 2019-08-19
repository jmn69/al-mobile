import types from './types';

export const setCurrentScene = currentScene => ({
  type: types.SET_CURRENT_SCENE,
  payload: currentScene,
});
