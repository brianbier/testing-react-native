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
  Image,
  TextInput,
  ListView,
  ScrollView,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: '', 
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around',alignItems: 'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 300, height: 50, backgroundColor: 'steelblue'}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word)=> word && '🍕').join(' ')}
          </Text>
        </View>
        <ListView 
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        />

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   image: {
//     width: 193, 
//     height: 110
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
