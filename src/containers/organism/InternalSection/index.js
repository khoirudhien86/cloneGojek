import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity} from 'react-native';

class InternalSection extends Component {
    render() {
        return(
            <View style={{padding: 16, paddingBottom: 0}}>
                <View style={{width: 55, height: 16, marginBottom: 10}}>
                    <Image source={this.props.logo} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 8}}>Complete Your Profile</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={this.props.img} />
                    </View>
                    <View style={{marginLeft: 10, width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14, marginBottom: 8}}>Connect to Your Facebook</Text>
                        <Text>ini teks internal information section.</Text>
                    </View>
                </View>
                {/* button */}
                <TouchableOpacity style={{backgroundColor: 'green', marginTop: 5, alignSelf: 'flex-end', paddingHorizontal: 12, paddingVertical: 11, borderRadius: 6, marginBottom: 15}}>
                    <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
                </TouchableOpacity>
                <View style={{borderWidth: 1, borderColor: 'grey'}}></View>
            </View>
        );
    }
}

export default InternalSection;