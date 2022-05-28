import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, DefaultTheme, NavigationContainer,} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import {StatusBar} from 'expo-status-bar';
import {useIsDark} from '../utils/hooks';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  const isDark = useIsDark();
  return (
    <Tab.Navigator screenOptions={() => ({
      tabBarIcon: ({color}) => <Ionicons name="home" size={30} color={color}/>
    })}>
      <Tab.Screen name="Welcome" component={() => <View/>}/>
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  const isDark = useIsDark();
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'}/>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            {/*<Stack.Screen*/}
            {/*  name="ModalExample"*/}
            {/*  component={ModalExample}*/}
            {/*/>*/}
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
