/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Todayscreen from './Screens/Todayscreen';
import Profilescreen from './Screens/Profilescreen';
import Madication from './Screens/Madication';
import Livechatscreen from './Screens/Livechatscreen';
import Appointementsscreen from './Screens/Appointementsscreen';

const Tab = createMaterialBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Today"
      activeColor="#03686b"
      inactiveColor='grey'
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Today"
        component={Todayscreen}
        options={{
          tabBarLabel: 'Today',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="earth" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Madication"
        component={Madication}
        options={{
          tabBarLabel: 'Madication',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pill" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Apppointments"
        component={Appointementsscreen}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-today" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Live Chat"
        component={Livechatscreen}
        options={{
          tabBarLabel: 'Live chat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat-processing" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <View style={styles.prifileView}>
              <Image style={styles.profilepic} source={{uri:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}}/>
            </View>
            //<MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  prifileView:{
    height:20,
    width:20,
    borderRadius:10,
    borderColor:'black',
    borderWidth:1
  },
  profilepic:{
    height:20,
    width:20,
    borderRadius:10
  }
});

export default App;
