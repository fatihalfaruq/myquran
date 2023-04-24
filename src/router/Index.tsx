import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/Splash';
import Home from '../screen/Home';
export type Pindah = {
  Home: undefined;
  Splash: undefined;
};

const Stack = createNativeStackNavigator<Pindah>();

const Index = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Index;
