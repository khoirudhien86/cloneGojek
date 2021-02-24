import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';

const GopaySection = ({img, nama, onPress}) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
            <TouchableOpacity onPress={onPress}>
                <Image style={{height: 35, width: 35}} source={img} />
            </TouchableOpacity>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>{nama}</Text>
        </View>
    );
}

export default GopaySection;