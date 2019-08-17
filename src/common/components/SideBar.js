import React, {Component} from 'react';
import {Image} from 'react-native';
import {Content, Text, List, ListItem} from 'native-base';
import {Actions} from 'react-native-router-flux';

const routes = [
  {
    name: 'Home',
    route: 'home',
  },
];

export default class Sidebar extends Component {
  render() {
    return (
      <Content>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/QixI7BlkT1I/maxresdefault.jpg',
          }}
          style={{
            height: 160,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#007ea7',
          }}
        />
        <List
          dataArray={routes}
          keyExtractor={(data, index) => index.toString()}
          renderRow={data => {
            return (
              <ListItem
                key={data.name}
                button
                onPress={() => Actions[data.route]()}>
                <Text>{data.name}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    );
  }
}
