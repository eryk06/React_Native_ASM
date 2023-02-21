import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FillProfile from './src/asm/FillProfile';
import ItemListNews from './src/asm/ItemListNews';
import ListNews from './src/asm/ListNews';
import Login from './src/asm/Login';
import NewDetail from './src/asm/NewDetail';
import Singup from './src/asm/Singup';
import {AppContextProvider} from './src/asm/ultil/AppContext';
import AppNavigator from './src/asm/ultil/AppNavigator';

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
