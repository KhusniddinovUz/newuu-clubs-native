import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Clubs from "../screens/Clubs";
import Club from "../screens/Club";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Clubs' component={Clubs}/>
            <Stack.Screen name='Club' component={Club}/>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>)
};

export default MainStackNavigator;
