import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Text>Security</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
