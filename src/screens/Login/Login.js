import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {RNLockScreen} from 'common/components/RNLockScreen';

export default class Login extends Component {
  _onPress() {
    RNLockScreen.Show();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#4a8df3'} barStyle={'light-content'} />
        <RNLockScreen
          type={1}
          mode={1}
          onCapture={lock => {
            console.log('lock: ' + lock);
          }}
          onVerified={() => {
            Actions.drawer();
          }}
          lock={'1234'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
