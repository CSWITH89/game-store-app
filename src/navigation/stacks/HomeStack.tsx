import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, ProductDetails} from 'screens';
import Squares from 'assets/images/Squares.svg';
import {ProfileIcon} from 'components';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false, headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
