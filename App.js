/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MobileAppBridge } from 'NativeModules';

console.log('Here is MobileAppBridge:', MobileAppBridge)

async function displayHelloWorld (self) {
  try {
    let text = await MobileAppBridge.testholochain("World")
    console.log(text)
    // let text = await MobileAppBridge.sayHelloWorld("World")
    self.setState({
      hello: JSON.stringify(text)
    })
  } catch (e) {
      console.log(e)
  }
}

export default class mobile_app extends Component {

  state = {}

  componentDidMount () {
    displayHelloWorld(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Created holochain? {this.state.hello}
        </Text>
      </View>
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

AppRegistry.registerComponent('mobile_app', () => mobile_app);
