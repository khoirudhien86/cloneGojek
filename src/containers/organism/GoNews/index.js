import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity} from 'react-native';

class GoNews extends Component {
    render() {
        return(
            <View style={{paddingTop: 15, paddingHorizontal: 16}}>
                {/* poster */}
                <View style={{position: 'relative'}}>
                    <Image source={this.props.poster} style={{height: 170, width: '100%', borderRadius: 6}} />
                    <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
                {/* agar logo tidak terpotong */}
                    <View style={{width: 55, height: 16, position: 'absolute', top: 16, left: 16 }}>
                        <Image source={this.props.logo} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                    </View>
                </View>
                {/* text */}
                <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>GO-NEWS</Text>
                    <Text style={{fontSize: 14}}>Dimas Drajat selamatkan penalti, Timnas kalahkan Brunei</Text>
                    {/* button */}
                    <TouchableOpacity style={{backgroundColor: 'green', marginTop: 5, alignSelf: 'flex-end', paddingHorizontal: 12, paddingVertical: 11, borderRadius: 6, marginBottom: 15}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default GoNews;