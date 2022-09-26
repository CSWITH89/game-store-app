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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShadowVisible: false,
            headerStyle: {backgroundColor: '#1c1c1e'},
            headerLeft: () => <Squares height={32} width={32} />,
            headerTitle: () => (
              <View style={{flex: 1, marginLeft: 5, flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 30,
                    fontWeight: '700',
                    marginRight: 5,
                  }}>
                  Steam
                </Text>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 30,
                    fontWeight: '300',
                  }}>
                  Core
                </Text>
              </View>
            ),
            headerRight: () => <ProfileIcon />,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShadowVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
