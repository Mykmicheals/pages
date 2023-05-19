import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/screens/HomePage';
import ProductPage from './src/screens/ProductPage';
import { store } from './src/store/store';
import { Ionicons } from '@expo/vector-icons';

 

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <StoreProvider store={store}>

  
 <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Add"
          component={HomePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="products"
          component={ProductPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
        </StoreProvider>
      );
      
}

