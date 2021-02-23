import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';

import SearchBar from './src/components/molecul/SearchBar';
import BannerGofood from './src/containers/organism/BannerGofood';
import GoNews from './src/containers/organism/GoNews';
import InternalSection from './src/containers/organism/InternalSection';
import MainContent from './src/containers/organism/MainContent';
import MainGopay from './src/containers/organism/MainGopay';
import NavBar from './src/containers/organism/NavBar';
import NearbyGofood from './src/containers/organism/NearbyGofood';
export default class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        {/* ini konten */}
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* ini seacrh bar & promo bar */}
          <SearchBar />
          {/* main gopay bar */}
          <MainGopay logo={require('./assets/gopay.png')} />
          {/* main konten */}
          <MainContent />
          {/* border */}
          <View style={{height: 17, backgroundColor: 'grey', marginTop: 5}}></View>
          {/* go news section */}
          <GoNews poster={require('./assets/sepak-bola.jpg')} logo={require('./assets/white.png')} />
          {/* banner go-food section */}
          <BannerGofood poster={require('./assets/food-banner.jpg')} logo={require('./assets/white.png')} />
          {/* internal information section */}
          <InternalSection logo={require('./assets/gojek.png')} img={require('./assets/facebook-connect.png')} />
          {/* Nearby Go-food */}
          <NearbyGofood logo={require('./assets/go-food-logo.png')}/>
        </ScrollView>
        {/* ini bottom bar */}
        <NavBar />
      </View>
    );
  };
};