import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import GopaySection from './src/components/molecul/GopaySection';
import MainSection from './src/components/molecul/MainSection';
import SearchBar from './src/components/molecul/SearchBar';
import BannerGofood from './src/containers/organism/BannerGofood';
import GoNews from './src/containers/organism/GoNews';
import InternalSection from './src/containers/organism/InternalSection';
export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* ini konten */}
        <ScrollView style={styles.content}>

          {/* ini seacrh bar & promo bar */}
          <SearchBar />

          {/* main gopay bar */}
          <View>
            <View style={{height: 40, flexDirection: 'row', justifyContent: 'space-between',marginHorizontal: 16, backgroundColor: 'blue', paddingHorizontal: 5, marginTop: 10, borderTopLeftRadius: 3, borderTopRightRadius: 3, alignItems: 'center'}}>
              <Image source={require('./assets/gopay.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Rp 50.000</Text>
            </View>
            <View style={{height: 80, backgroundColor: 'skyblue', marginHorizontal: 16, borderBottomLeftRadius: 3, borderBottomRightRadius: 3, flexDirection: 'row'}}>
              <GopaySection nama="Pay" img={require('./assets/pay.png')} />
              <GopaySection nama="Naerby" img={require('./assets/nearby.png')} />
              <GopaySection nama="Top Up" img={require('./assets/topup.png')} />
              <GopaySection nama="More" img={require('./assets/more.png')} />
            </View>
          </View>

          {/* main konten */}
          <View style={{marginTop: 15, paddingHorizontal: 5}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
              <MainSection nama="GO-RIDE" img={require('./assets/go-ride.png')} />
              <MainSection nama="GO-CAR" img={require('./assets/go-car.png')} />
              <MainSection nama="GO-BLUEBIRD" img={require('./assets/go-bluebird.png')} />
              <MainSection nama="GO-FOOD" img={require('./assets/go-food.png')} />
              <MainSection nama="GO-SEND" img={require('./assets/go-send.png')} />
              <MainSection nama="GO-DEALS" img={require('./assets/go-deals.png')} />
              <MainSection nama="GO-PULSA" img={require('./assets/go-pulsa.png')} />
              <MainSection nama="MORE" img={require('./assets/go-more.png')} />
            </View>
          </View>

          <View style={{height: 17, backgroundColor: 'grey', marginTop: 5}}></View>

          {/* go news section */}
          <GoNews poster={require('./assets/sepak-bola.jpg')} logo={require('./assets/white.png')} />

          {/* banner go-food section */}
          <BannerGofood poster={require('./assets/food-banner.jpg')} logo={require('./assets/white.png')} />
          
          {/* internal information section */}
          <InternalSection logo={require('./assets/gojek.png')} img={require('./assets/facebook-connect.png')} />

          {/* Nearby Go-food */}
          <View style={{padding: 16}}>
            <View style={{width: 55, height: 16, marginBottom: 10}}>
              <Image source={require('./assets/go-food-logo.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Nearby Restaurant</Text>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'green'}}>See All</Text>
            </View>

            <ScrollView horizontal style={{flexDirection: 'row', marginBottom: 20}}>
              <View style={{width: 150, height: 150, marginRight: 10}}>
                <Image source={require('./assets/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8, marginBottom: 10}} />
                <Text>KFC MALL</Text>
              </View>

              <View style={{width: 150, height: 150, marginRight: 10}}>
                <Image source={require('./assets/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8, marginBottom: 10}} />
                <Text>contoh 1</Text>
              </View>

              <View style={{width: 150, height: 150, marginRight: 10}}>
                <Image source={require('./assets/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8, marginBottom: 10}} />
                <Text>contoh 2</Text>
              </View>

              <View style={{width: 150, height: 150, marginRight: 10}}>
                <Image source={require('./assets/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8, marginBottom: 10}} />
                <Text>contoh 3</Text>
              </View>

              <View style={{width: 150, height: 150}}>
                <Image source={require('./assets/go-food-pak-boss.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8, marginBottom: 10}} />
                <Text>contoh 4</Text>
              </View>
            </ScrollView>
            <View style={{borderWidth: 1, borderColor: 'grey'}}></View>
          </View>

        </ScrollView>

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
