import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Favourites from './src/screens/Favourites';
import Profile from './src/screens/Profile';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component = {Home}/>
    </Stack.Navigator>
  )
};

function FavouritesStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="FavouritesScreen" component = {Favourites}/>
    </Stack.Navigator>
  )
};

function ProfileStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile}/>
    </Stack.Navigator>
  )
};


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      
      screenOptions={
        ({ route }) => ({
        tabBarActiveBackgroundColor:'#dcdcdc',
        tabBarInactiveBackgroundColor: '#778899',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            iconName= "home-outline";
          }
          if (route.name === 'Favourites') {
            iconName= "heart-outline";}
          if (route.name === 'Profile') {
            iconName= "person-outline";}
            return <Icon name={iconName} size={size} color={"black"}  />;},
          })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favourites" component={FavouritesStack} />
      <Tab.Screen name="Profile" component={Profile}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;