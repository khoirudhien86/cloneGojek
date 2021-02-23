import React from "react";
import { View, Image, Text} from 'react-native';

const GofoodItems = (props) => {
    return(
        <View style={{width: 150, height: 150, marginRight: 10}}>
            <Image source={props.img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8, marginBottom: 10}} />
            <Text>{props.nama}</Text>
        </View>
    );
}

export default GofoodItems;