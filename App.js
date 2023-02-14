import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Ionicons from '@expo/vector-icons';

// You can import from local files
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

const App = {
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Home: {
    screen: Home
  },
}


const Stack = createStackNavigator(App)
export default createAppContainer(Stack)