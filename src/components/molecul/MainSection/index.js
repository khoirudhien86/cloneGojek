import React from 'react';
import { View, Image, Text} from 'react-native';

const MainSection = (props) => {
    return(
        <View style={{width: `${100/4}%`, alignItems: 'center', marginBottom: 10}}>
            <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={props.img} />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>{props.nama}</Text>
        </View>
    );
}

export default MainSection;