import React, { Component } from "react";
import { View, StyleSheet} from 'react-native';
import NavbarItems from "../../../components/molecul/NavbarItems";

class NavBar extends Component {
    render() {
        return(
            <View style={styles.bottomBar}>
                <NavbarItems icon={require('../../../../assets/home-active.png')} nama="Home" active />
                <NavbarItems icon={require('../../../../assets/order.png')} nama="Orders" />
                <NavbarItems icon={require('../../../../assets/help.png')} nama="Help" />
                <NavbarItems icon={require('../../../../assets/inbox.png')} nama="Inbox" />
                <NavbarItems icon={require('../../../../assets/account.png')} nama="Account" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomBar: {
      backgroundColor: 'white',
      height: 54,
      flexDirection: 'row',
    }
})

export default NavBar;