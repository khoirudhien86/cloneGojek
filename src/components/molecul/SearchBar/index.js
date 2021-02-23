import React from 'react';
import { View, Image, TextInput} from 'react-native';

const SearchBar = () => {
    return(
        <View style={{flexDirection: 'row', paddingHorizontal: 16, paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="ketikkan sesuatu disini" style={{borderWidth: 1,borderColor: 'black', backgroundColor: 'white', borderRadius: 25, paddingLeft: 40, paddingRight: 30, height: 43}}/>
              <Image style={{position: 'absolute', top:9, left:8}} source={require('../../../../assets/search.png')} /> 
            </View>
            <View style={{width:40, height:40, alignItems:'center', justifyContent: 'center'}}>
              <Image style={{ marginLeft:15, height: 31}} source={require('../../../../assets/promo.png')} />
            </View>
          </View>
    );
}

export default SearchBar;