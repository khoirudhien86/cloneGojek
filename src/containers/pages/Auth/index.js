import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ButtonAuth from '../../../components/molecul/ButtonAuth'

export default class Auth extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <Text style={{textAlign: 'center'}}> selamat datang di Auth page </Text>
                <ButtonAuth teks="jika belum mempunyai akun, silahkan daftar dulu" button="daftar" />
                <ButtonAuth teks="jika sudah mempunyai akun, silahkan masuk" button="masuk" />
            </View>
        )
    }
}
