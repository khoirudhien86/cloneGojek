import React, {Component} from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

import SearchBar from '../../../components/molecul/SearchBar';
import BannerGofood from '../../../containers/organism/BannerGofood';
import GoNews from '../../../containers/organism/GoNews';
import InternalSection from '../../../containers/organism/InternalSection';
import MainContent from '../../../containers/organism/MainContent';
import MainGopay from '../../../containers/organism/MainGopay';
import NavBar from '../../../containers/organism/NavBar';
import NearbyGofood from '../../../containers/organism/NearbyGofood';
import GopaySection from '../../../components/molecul/GopaySection';

const Home = ({navigation}) => {
    const Goto = (coba) => {
        navigation.navigate(coba);
    }
        return(
            <View style={{flex: 1}}>
                {/* ini konten */}
                <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                {/* ini seacrh bar & promo bar */}
                <SearchBar />
                {/* main gopay bar */}
                {/* <MainGopay logo={require('../../../../assets/gopay.png')} onPress={() => Goto('Nearby')} /> */}
                <View>
                    <View style={{height: 40, flexDirection: 'row', justifyContent: 'space-between',marginHorizontal: 16, backgroundColor: 'blue', paddingHorizontal: 5, marginTop: 10, borderTopLeftRadius: 3, borderTopRightRadius: 3, alignItems: 'center'}}>
                        <Image source={require('../../../../assets/gopay.png')} />
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Rp 50.000</Text>
                    </View>
                    <View style={{height: 80, backgroundColor: 'skyblue', marginHorizontal: 16, borderBottomLeftRadius: 3, borderBottomRightRadius: 3, flexDirection: 'row'}}>
                        <GopaySection nama="Pay" img={require('../../../../assets/pay.png')} onPress={() => Goto('Pay')} />
                        <GopaySection nama="Naerby" img={require('../../../../assets/nearby.png')} onPress={() => Goto('Nearby')} />
                        <GopaySection nama="Top Up" img={require('../../../../assets/topup.png')} />
                        <GopaySection nama="More" img={require('../../../../assets/more.png')} />
                    </View>
                </View>
                {/* main konten */}
                <MainContent />
                {/* border */}
                <View style={{height: 17, backgroundColor: 'grey', marginTop: 5}}></View>
                {/* go news section */}
                <GoNews poster={require('../../../../assets/sepak-bola.jpg')} logo={require('../../../../assets/white.png')} />
                {/* banner go-food section */}
                <BannerGofood poster={require('../../../../assets/food-banner.jpg')} logo={require('../../../../assets/white.png')} />
                {/* internal information section */}
                <InternalSection logo={require('../../../../assets/gojek.png')} img={require('../../../../assets/facebook-connect.png')} />
                {/* Nearby Go-food */}
                <NearbyGofood logo={require('../../../../assets/go-food-logo.png')}/>
                </ScrollView>
                {/* ini bottom bar */}
                <NavBar />
            </View>
        );
    
};

export default Home;