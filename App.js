import React from 'react';
import {Container, StyleProvider} from 'native-base';
import Switch from 'src/common/components/Switch';
import getTheme from 'src/common/native-base-theme/components';
import platform from 'src/common/native-base-theme/variables/platform';

export default () => {
  return (
    <StyleProvider style={getTheme(platform)}>
      <Container>
        <Switch />
      </Container>
    </StyleProvider>
  );
};
