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
  Image,
  TextInput
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    {/* props */}
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
        <PizzaTranslator style={{width: 193, height: 110}}/>
        {/* props */}
        <Greetings name='Rexxar' />
        <Greetings name='Jaina' />
        <Greetings name='Valeera' />
        {/* state */}
        <Blink text='Blink blink' />
        {/* height and width */}
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        {/* flex */}
        <View style={{flex: 1}}>
        <Text>eiei</Text>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
      {/* flex direction */}
      <View style={{flex: 1, flexDirection: 'row'}}>
       <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
       <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
       <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
     </View>

     {/* flex justify content */}
      <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          </View>

          {/* flex Align Items*/}
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      </View>
    );
  }
}

//props
class Greetings extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

//State
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

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42, width: 200}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
