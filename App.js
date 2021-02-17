import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.content}></View>
        <View style={styles.bottomBar}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/home-active.png')} />
            <Text style={{color: 'green'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/order.png')} />
            <Text>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/help.png')} />
            <Text>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/inbox.png')} />
            <Text>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/account.png')} />
            <Text>Account</Text>
          </View>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    backgroundColor: 'pink',
  }
})
