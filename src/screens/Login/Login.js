import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import {RNLockScreen, State} from 'common/components/RNLockScreen';
import {loginOperations} from './redux';

const MemoLockScreen = React.memo(({onCapture, state}) => {
  return <RNLockScreen type={1} onCapture={onCapture} state={state} />;
});

const LoginComponent = ({login, loginIsLoading}) => {
  const [test, setTest] = useState(State.Default);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4a8df3'} barStyle={'light-content'} />
      <Spinner
        visible={loginIsLoading}
        textContent={'Chargement...'}
        textStyle={styles.whiteColor}
      />
      <MemoLockScreen
        onCapture={({username, lock}) => {
          let password = '';
          if (lock) {
            const numArray = lock.split('');
            numArray.forEach((num, index) => {
              if (index > 0 && index !== numArray.count - 1) {
                password += `-${num}`;
              } else {
                password += num;
              }
            });
          }

          login({username, password})
            .then(data => {
              if (data) {
                setTest(State.Success);
                Actions.drawer();
              }
            })
            .catch(() => setTest(State.Error));
        }}
        state={test}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    loginIsLoading: state.login.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: formData => dispatch(loginOperations.login(formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
