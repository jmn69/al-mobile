import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';

const Launch = ({authCheckIsLoading}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Spinner
        visible={authCheckIsLoading}
        textContent={'Chargement...'}
        textStyle={styles.whiteColor}
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
    authCheckIsLoading: state.auth.authCheckIsLoading,
  };
};

export default connect(mapStateToProps)(Launch);
