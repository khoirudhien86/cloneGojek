import React, { Component } from "react";
import { View } from 'react-native';
import MainSection from '../../../components/molecul/MainSection';

class MainContent extends Component {
    render() {
        return(
            <View style={{marginTop: 15, paddingHorizontal: 5}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
              <MainSection nama="GO-RIDE" img={require('../../../../assets/go-ride.png')} />
              <MainSection nama="GO-CAR" img={require('../../../../assets/go-car.png')} />
              <MainSection nama="GO-BLUEBIRD" img={require('../../../../assets/go-bluebird.png')} />
              <MainSection nama="GO-FOOD" img={require('../../../../assets/go-food.png')} />
              <MainSection nama="GO-SEND" img={require('../../../../assets/go-send.png')} />
              <MainSection nama="GO-DEALS" img={require('../../../../assets/go-deals.png')} />
              <MainSection nama="GO-PULSA" img={require('../../../../assets/go-pulsa.png')} />
              <MainSection nama="MORE" img={require('../../../../assets/go-more.png')} />
            </View>
          </View>
        );
    }
}

export default MainContent;