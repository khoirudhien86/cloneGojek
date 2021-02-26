import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';

const GopaySection = ({img, nama, onPress}) => {
    return(
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={onPress} style={{alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image style={{height: 35, width: 35}} source={img} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>{nama}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GopaySection;