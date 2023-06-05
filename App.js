import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Favourites from './src/screens/Favourites';
import Profile from './src/screens/Profile';
import Basket from './src/screens/Basket';
import BookDetail from './src/screens/BookDetail';
import Add from './src/screens/Add';

import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component= {Home} options={{ headerShown: false }}/>
      <Stack.Screen name= "Profile" component= {Profile} options={{ headerShown: false }} />
      <Stack.Screen name= "BookDetail" component= {BookDetail} options={{ headerShown: false }}/>
      <Stack.Screen name= "Add" component= {Add} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
};

function App() {



  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
                                  tabBarActiveBackgroundColor:'#dcdcdc',
                                  tabBarInactiveBackgroundColor: '#778899',
                                  tabBarShowLabel: false,
                                  tabBarIcon: ({ color, size }) => {
                                    if (route.name === 'Home') {
                                      iconName= "home-outline";
                                    }
                                    if (route.name === 'Favourites') {
                                      iconName= "heart-outline";}
                                    if (route.name === 'Basket') {
                                      iconName= "cart-outline";}
                                      return <Icon name={iconName} size={size} color={"black"}  />;},
                                    })}>
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
      <Tab.Screen name="Favourites" component={Favourites} options={{ headerShown: false }} />
      <Tab.Screen name="Basket" component={Basket} options={{ headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;