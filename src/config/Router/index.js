import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Nearby,Pay } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Pay" component={Pay} />
            <Stack.Screen name="Nearby" component={Nearby} />
        </Stack.Navigator>
    );
}

export default Router;