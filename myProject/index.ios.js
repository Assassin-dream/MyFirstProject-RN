/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

var TabBarExample = require('./tabbar');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TabBarIOS,
} from 'react-native';

class myProject extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     欢迎来到英雄联盟!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     你可以在这里开始编辑项目!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
        <TabBarExample>
          
        </TabBarExample>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myProject', () => myProject);
