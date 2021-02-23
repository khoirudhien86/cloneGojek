import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity} from 'react-native';

class BannerGofood extends Component {
    render() {
        return(
            <View style={{padding: 16, paddingBottom: 0}}>
            {/* banner & logo */}
                <View style={{position: 'relative', width: '100%'}}>
                    <Image source={this.props.poster} style={{height: 170, width: '100%', borderRadius: 6}} />
                    <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.15, borderRadius: 6}}></View>
                    <View style={{width: 55, height: 16, position: 'absolute', top: 16, left: 16 }}>
                        <Image source={this.props.logo} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                    </View>
                    {/* text & button */}
                    <View style={{position: 'absolute', left: 0, bottom: 0, flexDirection: 'row', width: '100%', paddingHorizontal: 16, paddingBottom: 10}}>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 8}}>GO-FOOD BANNER</Text>
                            <Text style={{color: 'white'}}>ini adalah contoh food banner internal</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{backgroundColor: 'green', marginTop: 15, alignSelf: 'stretch', paddingHorizontal: 12, paddingVertical: 11, borderRadius: 6}}>
                            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{borderWidth: 1, borderColor: 'grey', marginTop: 16}}></View>
            </View>
        );
    }
}

export default BannerGofood;