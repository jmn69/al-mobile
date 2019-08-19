import React from 'react';
import {Container, StyleProvider} from 'native-base';
import {Provider} from 'react-redux';

import Switch from 'src/common/components/Switch';
import getTheme from 'src/common/native-base-theme/components';
import platform from 'src/common/native-base-theme/variables/platform';

import store from 'src/redux/store';

export default () => {
  return (
    <StyleProvider style={getTheme(platform)}>
      <Provider store={store}>
        <Container>
          <Switch />
        </Container>
      </Provider>
    </StyleProvider>
  );
};
