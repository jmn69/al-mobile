import React, {Component, Fragment} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {Icon, Text} from 'native-base';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {authOperations} from 'src/redux/auth';
import SideBar from './SideBar';
import Launch from 'src/screens/Launch';
import Home from 'src/screens/Home';
import Login from 'src/screens/Login';

const SCENES_TITLE = {
  home: 'Home',
  login: 'Login',
};

const styles = StyleSheet.create({
  whiteColor: {
    color: 'white',
  },
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

class Switch extends Component {
  renderTitle = () => {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{SCENES_TITLE[Actions.currentScene]}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Fragment>
        {/* <Spinner
          visible={this.props.initialDataLoaded}
          textContent={'Loading initial data...'}
          textStyle={styles.whiteColor}
        /> */}
        <Router>
          <Scene overlay>
            <Scene
              key="lightbox"
              lightbox
              leftButtonTextStyle={{color: 'green'}}
              backButtonTextStyle={{color: 'red'}}
              initial>
              <Scene key="modal" modal hideNavBar>
                <Scene
                  key="Launch"
                  component={Launch}
                  initial
                  on={async () => {
                    const isAuth = await this.props.authCheck();
                    console.log(isAuth);
                    return isAuth;
                  }}
                  success="drawer"
                  failure="login"
                />
                <Scene key="login" component={Login} />
                <Scene
                  key="drawer"
                  drawer
                  headerMode="screen"
                  renderTitle={this.renderTitle}
                  drawerIcon={<Icon style={styles.whiteColor} name="menu" />}
                  contentComponent={SideBar}
                  navigationBarStyle={{backgroundColor: '#00171f'}}
                  titleStyle={styles.whiteColor}>
                  <Scene key="main">
                    <Scene
                      key="home"
                      component={Home}
                      title={SCENES_TITLE.home}
                    />
                  </Scene>
                </Scene>
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authOperations.authCheck()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Switch);
