import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import SplashScreen from './src/components/SplashScreen';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              options={{headerShown: false}}
              name="SplashScreen"
              component={SplashScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default App;
