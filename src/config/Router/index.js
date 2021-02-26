import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Nearby,Pay,Auth } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Pay" component={Pay} />
            <Stack.Screen name="Nearby" component={Nearby} />
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
    );
}

export default Router;