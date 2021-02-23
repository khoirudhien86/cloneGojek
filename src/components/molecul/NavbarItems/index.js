import React from "react";
import { View, Image, Text} from 'react-native';

const NavbarItems = (props) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={props.icon} />
            <Text style={{color: props.active ? 'green' : 'black'}}>{props.nama}</Text>
        </View>
    );
}

export default NavbarItems;