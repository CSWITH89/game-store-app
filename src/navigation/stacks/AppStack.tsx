import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, ProductDetails} from 'screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ZurichMart"
          component={Home}
          options={{headerShadowVisible: false}}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={{headerShadowVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
