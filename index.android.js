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
  View,
  Image
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
      <Image source={ pic } style={{width: 193, height: 110}}/>
        <Text style={styles.welcome}>
          Kuy ปอมมมมม 5555555555
        </Text>
        <Text style={styles.instructions}>
          กุเทพสุดในสามโลกเว้ยยยย
        </Text>
        <Greetings name='Rexxar' />
        <Greetings name='Jaina' />
        <Greetings name='Valeera' />
        <Blink text='Blink blink' />
      </View>
    );
  }
}

class Greetings extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>

    );
  }
}

class Blink extends Component {
  constructor (props) {
    super(props);
    this.state = { showText: true };

    setInterval (() => {
      this.setState({ showText: !this.state.showText});
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
        <Text>{ display }</Text>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
