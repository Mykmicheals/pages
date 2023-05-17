import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/screens/HomePage';
import ProductPage from './src/screens/ProductPage';
import { store } from './src/store/store';
 

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <StoreProvider store={store}>

  
  <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen  name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={ProductPage} />
      </Tab.Navigator>
      </NavigationContainer>
        </StoreProvider>
      );
      
}

