import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';

const SCENES_TITLE = {
  home: 'Home',
  login: 'Login',
  security: 'Security',
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const TitleComponent = ({currentScene}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{SCENES_TITLE[currentScene]}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentScene: state.router.currentScene,
  };
};

export default connect(mapStateToProps)(TitleComponent);
