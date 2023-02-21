import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import FillProfile from '../FillProfile';
import ListNews from '../ListNews';
import Login from '../Login';
import NewDetail from '../NewDetail';
import Singup from '../Singup';
import {AppContext} from './AppContext';

const Stack = createNativeStackNavigator();
// Login, Register
const Users = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Singup" component={Singup} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
// News, detail, search, profile
// Bottom tabs
const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListNews" component={ListNews} />
      <Tab.Screen name="FillProfile" component={FillProfile} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const {isLogin} = useContext(AppContext);

  return <>{isLogin == false ? <Users /> : <Main />}</>;
};

export default AppNavigator;
