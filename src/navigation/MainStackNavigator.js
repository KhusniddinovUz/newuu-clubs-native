import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Clubs from "../screens/Clubs";
import Club from "../screens/Club";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName='Register'>
            <Stack.Screen name='Clubs' component={Clubs}/>
            <Stack.Screen name='Club' component={Club}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
        </Stack.Navigator>
    </NavigationContainer>)
};

export default MainStackNavigator;
