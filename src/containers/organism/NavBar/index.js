import React, { Component } from "react";
import { View, StyleSheet} from 'react-native';
import NavbarItems from "../../../components/molecul/NavbarItems";
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();
        return(
            <View style={styles.bottomBar}>
                <NavbarItems icon={require('../../../../assets/home-active.png')} nama="Home" active />
                <NavbarItems icon={require('../../../../assets/order.png')} nama="Orders" />
                <NavbarItems icon={require('../../../../assets/help.png')} nama="Help" />
                <NavbarItems icon={require('../../../../assets/inbox.png')} nama="Inbox" />
                <NavbarItems icon={require('../../../../assets/account.png')} nama="Account" onPress={() => navigation.navigate('Auth')} />
            </View>
        );
    }

const styles = StyleSheet.create({
    bottomBar: {
      backgroundColor: 'white',
      height: 54,
      flexDirection: 'row',
    }
})

export default NavBar;