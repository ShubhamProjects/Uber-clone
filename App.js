import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/core/store';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import MapScreen from './src/screens/MapScreen';

export default function App()
{
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home Screen"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="Map Screen"
              component={MapScreen}
              options={{headerShown: false}}
            />
        </Stack.Navigator>
      </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

