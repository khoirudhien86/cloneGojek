import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ButtonAuth = ({teks, button}) => {
    return (
        <View style={{paddingHorizontal: 20, alignItems: 'center', paddingTop: 20, marginBottom: 10}}>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: 'grey', textAlign: 'center'}}>{teks}</Text>
                <TouchableOpacity style={{borderColor: 'red', borderWidth: 1, marginTop: 10, borderRadius: 15, backgroundColor: 'yellow', width: 150}}>
                    <Text style={{padding: 10, textAlign: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold', color: 'purple', textTransform: 'uppercase'}}>{button}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonAuth;
