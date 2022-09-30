import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Squares from 'assets/images/Squares.svg';
import {ProfileIcon} from 'components';
import {Text, View, StyleSheet} from 'react-native';
import Home from 'assets/images/Home.svg';
import ShoppingBag from 'assets/images/ShoppingBag.svg';
import ChatBubble from 'assets/images/ChatBubble.svg';
import BarsArrowDown from 'assets/images/BarsArrowDown.svg';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import {Settings} from 'screens';

const AppStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
          headerTitleAlign: 'left',
          headerShadowVisible: false,
          headerStyle: styles.tabHeaderStyle,
          headerLeft: () => (
            <View style={styles.headerLeftStyle}>
              <Squares height={32} width={32} />
            </View>
          ),
          headerTitle: () => (
            <View style={styles.headerTitleStyle}>
              <Text style={styles.boldLogoText}>Steam</Text>
              <Text style={styles.regularLogoText}>Core</Text>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRightStyle}>
              <ProfileIcon />
            </View>
          ),
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.activeIcon}>
                  <Home height={30} width={30} />
                </View>
              ) : (
                <View style={styles.inactiveIcon}>
                  <Home height={30} width={30} />
                </View>
              ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.activeIcon}>
                  <ChatBubble height={30} width={30} />
                </View>
              ) : (
                <View style={styles.inactiveIcon}>
                  <ChatBubble height={30} width={30} />
                </View>
              ),
          }}
        />
        <Tab.Screen
          name="Shopping"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.activeIcon}>
                  <ShoppingBag height={30} width={30} />
                </View>
              ) : (
                <View style={styles.inactiveIcon}>
                  <ShoppingBag height={30} width={30} />
                </View>
              ),
          }}
        />
        <Tab.Screen
          name="Guard"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.activeIcon}>
                  <BarsArrowDown height={30} width={30} />
                </View>
              ) : (
                <View style={styles.inactiveIcon}>
                  <BarsArrowDown height={30} width={30} />
                </View>
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  activeIcon: {
    marginTop: -40,
    backgroundColor: '#2189ff',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveIcon: {marginTop: 20},
  boldLogoText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '700',
    marginRight: 5,
  },
  regularLogoText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '300',
  },
  headerRightStyle: {
    marginRight: 14,
  },
  headerTitleStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftStyle: {
    marginLeft: 10,
  },
  tabBarStyle: {
    backgroundColor: '#2c2c2e',
    borderTopWidth: 0,
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  tabHeaderStyle: {backgroundColor: '#1c1c1e'},
});

export default AppStack;
