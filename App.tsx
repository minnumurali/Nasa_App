import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Asteroid from './Screens/Asteroid';
import RandomAsteroid from './Screens/RandomAsteroid';


const Stack : any = createNativeStackNavigator()

export default function App() {
  return (
   <>
      <StatusBar style="auto" />

      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home" component={Home}/>  
             <Stack.Screen
            name="Asteroid Details" component={Asteroid}/>
            <Stack.Screen
            name="Random Asteroid Details" component={RandomAsteroid}/>
         </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
