import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Clubs from "../screens/Clubs";
import Club from "../screens/Club";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Clubs' component={Clubs}/>
            <Stack.Screen name='Club' component={Club}/>
        </Stack.Navigator>
    </NavigationContainer>)
};

export default MainStackNavigator;
