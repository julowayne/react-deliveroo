import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/Screens/HomeScreen';
import LivraisonPage from './components/Screens/LivraisonPage';
import ToGoPage from './components/Screens/ToGoPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Accueil', headerShown: false}}
        />
        <Stack.Screen
          name="Livraison"
          component={LivraisonPage}
          options={{title: 'Livraison', headerShown: false}}
        />
        <Stack.Screen
          name="Emporter"
          component={ToGoPage}
          options={{title: 'A emporter', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
