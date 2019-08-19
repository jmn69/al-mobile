import AsyncStorage from '@react-native-community/async-storage';

const currentUserKey = 'current_user';

export const getCurrentUser = async () => {
  try {
    const user = await AsyncStorage.getItem(currentUserKey);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  } catch (e) {
    console.log(`Error getCurrentUser: ${e}`);
    return Promise.reject(e);
  }
};

export const setCurrentUser = async (userId, accessToken, refreshToken) => {
  try {
    await AsyncStorage.setItem(
      currentUserKey,
      JSON.stringify({id: userId, accessToken, refreshToken}),
    );
  } catch (e) {
    console.log(`Error setCurrentUser: ${e}`);
    return Promise.reject(e);
  }
};

export const clear = () => AsyncStorage.clear();
