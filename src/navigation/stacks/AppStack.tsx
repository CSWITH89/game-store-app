import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Squares from 'assets/images/Squares.svg';
import {ProfileIcon} from 'components';
import {Text, View} from 'react-native';
import Home from 'assets/images/Home.svg';
import ShoppingBag from 'assets/images/ShoppingBag.svg';
import ChatBubble from 'assets/images/ChatBubble.svg';
import BarsArrowDown from 'assets/images/BarsArrowDown.svg';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';

const AppStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#2c2c2e',
            borderTopWidth: 0,
            borderRadius: 20,
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
          },
          // tabBarInactiveBackgroundColor: '#1c1c1e',
          // tabBarActiveBackgroundColor: '#1c1c1e',
          headerTitleAlign: 'left',
          headerShadowVisible: false,
          headerStyle: {backgroundColor: '#1c1c1e'},
          headerLeft: () => (
            <View
              style={{
                marginLeft: 10,
              }}>
              <Squares height={32} width={32} />
            </View>
          ),
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
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
          headerRight: () => (
            <View
              style={{
                marginRight: 14,
              }}>
              <ProfileIcon />
            </View>
          ),
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: () => <Home height={30} width={30} />,
          }}
        />
        <Tab.Screen
          name="Community"
          component={HomeStack}
          options={{
            tabBarIcon: () => <ChatBubble height={30} width={30} />,
          }}
        />
        <Tab.Screen
          name="Shopping"
          component={HomeStack}
          options={{
            tabBarIcon: () => <ShoppingBag height={30} width={30} />,
          }}
        />
        <Tab.Screen
          name="Guard"
          component={HomeStack}
          options={{
            tabBarIcon: () => <BarsArrowDown height={30} width={30} />,
          }}
        />
        {/* each screen has options, tabbaricon attribute, reutrn a function  */}
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
