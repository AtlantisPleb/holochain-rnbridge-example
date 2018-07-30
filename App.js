import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { MobileAppBridge } from 'NativeModules'

async function displayHelloWorld (self) {
  try {
    let res = await MobileAppBridge.testholochain("World")
    console.log(res)

    self.setState({
      response: JSON.stringify(res)
    })
  } catch (e) {
      console.log(e)
  }
}

export default class rust1 extends Component {
  state = {}

  componentDidMount () {
    console.log('MobileAppBridge:', MobileAppBridge)
    displayHelloWorld(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Created holochain? {this.state.response}
        </Text>
      </View>
    )
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
  }
})
