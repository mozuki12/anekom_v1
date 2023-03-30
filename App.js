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
import LupaPass from './components/LupaPass';
import Notes from './components/Notes';
import Quiz from './components/Quiz';
import Materi from './components/Materi';
import Akun from './components/Akun';

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
  LupaPass: {
    screen: LupaPass
  },
  Notes: {
    screen: Notes
  },
  Quiz: {
    screen: Quiz
  },
  Materi: {
    screen: Materi
  },
  Akun: {
    screen: Akun
  },
}


const Stack = createStackNavigator(App)
export default createAppContainer(Stack)