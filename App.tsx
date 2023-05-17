import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/screens/HomePage';
import ProductPage from './src/screens/ProductPage';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={ProductPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

