import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* ini konten */}
        <View style={styles.content}>
          {/* ini seacrh bar & promo bar */}
          <View style={{flexDirection: 'row', paddingHorizontal: 20, paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="ketikkan sesuatu disini" style={{borderWidth: 1,borderColor: 'black', backgroundColor: 'white', borderRadius: 25, paddingLeft: 40, paddingRight: 30, height: 43}}/>
              <Image style={{position: 'absolute', top:9, left:8}} source={require('./assets/search.png')} /> 
            </View>
            <View style={{width:40, height:40, alignItems:'center', justifyContent: 'center'}}>
              <Image style={{ marginLeft:15, height: 31}} source={require('./assets/promo.png')} />
            </View>
          </View>
          {/* main gopay bar */}
          <View>
            <View style={{height: 40, flexDirection: 'row', justifyContent: 'space-between',marginHorizontal: 20, backgroundColor: 'blue', paddingHorizontal: 5, marginTop: 10, borderTopLeftRadius: 3, borderTopRightRadius: 3, alignItems: 'center'}}>
              <Image source={require('./assets/gopay.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Rp 50.000</Text>
            </View>
            <View style={{height: 80, backgroundColor: 'skyblue', marginHorizontal: 20, borderBottomLeftRadius: 3, borderBottomRightRadius: 3, flexDirection: 'row'}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image  style={{height: 35, width: 35}} source={require('./assets/pay.png')} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>Pay</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image  style={{height: 35, width: 35}} source={require('./assets/nearby.png')} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>Nearby</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image  style={{height: 35, width: 35}} source={require('./assets/topup.png')} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>Top Up</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image  style={{height: 35, width: 35}} source={require('./assets/more.png')} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>More</Text>
              </View>
            </View>
          </View>
        </View>
        {/* ini bottom bar */}
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
    backgroundColor: 'white',
  }
})
