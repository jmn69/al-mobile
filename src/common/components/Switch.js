import React, {Fragment} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {authOperations} from 'src/redux/auth';
import SideBar from './SideBar';
import Launch from 'src/screens/Launch';
import Home from 'src/screens/Home';
import Security from 'src/screens/Security';
import Login from 'src/screens/Login';
import {routerOperations} from 'src/redux/router';
import Title from './Title';

const SCENES_TITLE = {
  home: 'Home',
  login: 'Login',
  security: 'Security',
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

const Switch = ({setCurrentScene, authCheck}) => {
  return (
    <Fragment>
      <Router onStateChange={() => setCurrentScene(Actions.currentScene)}>
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
                  const isAuth = await authCheck();
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
                renderTitle={Title}
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
                  <Scene
                    key="security"
                    component={Security}
                    title={SCENES_TITLE.security}
                  />
                </Scene>
              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authOperations.authCheck()),
    setCurrentScene: currentScene =>
      dispatch(routerOperations.setCurrentScene(currentScene)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Switch);
