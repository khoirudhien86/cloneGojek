import React from 'react';
import { View, Image, Text} from 'react-native';

const GopaySection = (props) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
            <Image  style={{height: 35, width: 35}} source={props.img} />
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>{props.nama}</Text>
        </View>
    );
}

export default GopaySection;