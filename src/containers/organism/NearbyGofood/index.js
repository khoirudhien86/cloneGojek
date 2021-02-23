import React, { Component } from "react";
import { View, Image, Text, ScrollView} from 'react-native';
import GofoodItems from '../../../components/molecul/GofoodItems';

class NearbyGofood extends Component {
    render() {
        return(
            <View style={{padding: 16}}>
                <View style={{width: 55, height: 16, marginBottom: 10}}>
                    <Image source={this.props.logo} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Nearby Restaurant</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'green'}}>See All</Text>
                </View>

                <ScrollView horizontal style={{flexDirection: 'row', marginBottom: 20}}>
                    <GofoodItems img={require('../../../../assets/go-food-kfc.jpg')} nama="KFC MALL" />
                    <GofoodItems img={require('../../../../assets/go-food-banka.jpg')} nama="contoh 1" />
                    <GofoodItems img={require('../../../../assets/go-food-gm.jpg')} nama="contoh 2" />
                    <GofoodItems img={require('../../../../assets/go-food-orins.jpg')} nama="contoh 3" />
                    <GofoodItems img={require('../../../../assets/go-food-pak-boss.jpg')} nama="contoh 4" />
                </ScrollView>
                <View style={{borderWidth: 1, borderColor: 'grey'}}></View>
          </View>
        );
    }
}

export default NearbyGofood;