import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity} from 'react-native';
import GopaySection from '../../../components/molecul/GopaySection';
import { useNavigation } from '@react-navigation/native';


const MainGopay = ({logo}) => {
      const navigation = useNavigation();
      const Goto = (coba) => {
        navigation.navigate(coba);
      }
        return(
            <View>
            <View style={{height: 40, flexDirection: 'row', justifyContent: 'space-between',marginHorizontal: 16, backgroundColor: 'blue', paddingHorizontal: 5, marginTop: 10, borderTopLeftRadius: 3, borderTopRightRadius: 3, alignItems: 'center'}}>
              <Image source={logo} />
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Rp 50.000</Text>
            </View>
            <View style={{height: 80, backgroundColor: 'skyblue', marginHorizontal: 16, borderBottomLeftRadius: 3, borderBottomRightRadius: 3, flexDirection: 'row'}}>
              <GopaySection nama="Pay" img={require('../../../../assets/pay.png')} onPress={() => Goto('Pay')} />
              <GopaySection nama="Naerby" img={require('../../../../assets/nearby.png')} onPress={() => Goto('Nearby')} />
              <GopaySection nama="Top Up" img={require('../../../../assets/topup.png')} />
              <GopaySection nama="More" img={require('../../../../assets/more.png')} />
            </View>
          </View>
        );
    }

export default MainGopay;