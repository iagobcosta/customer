import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/screens/Home'
import Chat from './src/screens/Chat'
import LogoTitle from './src/components/LogoTitle'
import NavigationOnboarding from './src/screens/onboarding/NavigationOnboarding'


const Stack = createStackNavigator();


function App() {

  return (  
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Somapay" 
              component={Home}
              options={{
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle:{backgroundColor: '#52197F'},
                headerTitleStyle:{color: 'white'}
              }}
            />
            <Stack.Screen 
              name="Chat" 
              component={Chat} 
              options={{
                headerStyle:{backgroundColor: '#52197F'},
                headerTitleStyle:{color: 'white'},
                headerBackImage: props => <Icon name='arrow-left' size={20} color='white' {...props} />
              }}
            />
            <Stack.Screen 
              name="Onboarding"              
              component={NavigationOnboarding}             
              options={{
                headerStyle:{backgroundColor: '#52197F'},
                headerTitleStyle:{color: 'white'},
                headerBackImage: props => <Icon name='chevron-left' size={20} color='white' {...props} />,
               
              }}
            />
        </Stack.Navigator>
    }</NavigationContainer>
  );
}
export default App;


