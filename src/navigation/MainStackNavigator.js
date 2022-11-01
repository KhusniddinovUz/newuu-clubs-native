import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Clubs from "../screens/Clubs";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return(
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Clubs' component={Clubs}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
};

export default MainStackNavigator;
