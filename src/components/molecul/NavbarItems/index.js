import React from "react";
import { View, Image, Text, TouchableOpacity} from 'react-native';

const NavbarItems = ({active, nama, icon, onPress}) => {
    return(
        <View style={{flex: 1, paddingTop: 8, paddingBottom: 15 }}>
            <TouchableOpacity onPress={onPress} style={{alignItems: 'center', justifyContent: 'center'}} >
                <Image style={{marginBottom: 4, height: 26, width: 26 }} source={icon} />
                <Text style={{color: active ? 'green' : 'black'}}>{nama}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NavbarItems;