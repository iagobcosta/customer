//import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
import Task5 from './Task5'
import Task6 from './Task6'
import Task7 from './Task7'
import Task8 from './Task8'

const Stack = createStackNavigator();

function navigationOnboarding(){
    return (  
        
          <Stack.Navigator 
          initialRouteName="Task1"
          screenOptions={{
            headerShown: false
          }}>
                <Stack.Screen 
                  name="Primeiro passo" 
                  component={Task1}
                  options={{
                    headerStyle:{backgroundColor: '#52197F'},
                    headerTitleStyle:{color: 'white'},
                  }}
                />
                <Stack.Screen 
                  name="Task2" 
                  component={Task2} 
                  options={{
                    headerStyle:{backgroundColor: '#52197F'},
                    headerTitleStyle:{color: 'white'},
                    headerBackImage: props => <Icon name='arrow-left' size={20} color='white' {...props} />
                  }}
                />
                <Stack.Screen 
                  name="Task3" 
                  component={Task3} 
                  options={{
                    headerStyle:{backgroundColor: '#52197F'},
                    headerTitleStyle:{color: 'white'},
                    headerBackImage: props => <Icon name='arrow-left' size={20} color='white' {...props} />
                  }}
                />
                <Stack.Screen 
                  name="Task4" 
                  component={Task4} 
                  options={{
                    headerStyle:{backgroundColor: '#52197F'},
                    headerTitleStyle:{color: 'white'},
                    headerBackImage: props => <Icon name='arrow-left' size={20} color='white' {...props} />
                  }}
                />
                <Stack.Screen 
                  name="Task5" 
                  component={Task5} 
                  options={{
                    headerStyle:{backgroundColor: '#52197F'},
                    headerTitleStyle:{color: 'white'},
                    headerBackImage: props => <Icon name='arrow-left' size={20} color='white' {...props} />
                  }}
                />
                 <Stack.Screen 
                  name="Task6" 
                  component={Task6} 
                  options={{
                    headerStyle:{backgroundColor: '#52197F'},
                    headerTitleStyle:{color: 'white'},
                    headerBackImage: props => <Icon name='arrow-left' size={20} color='white' {...props} />
                  }}
                />
                <Stack.Screen 
                  name="Task7" 
                  component={Task7} 
                  options={{
                    headerStyle:{backgroundColor: '#52197F'},
                    headerTitleStyle:{color: 'white'},
                    headerBackImage: props => <Icon name='arrow-left' size={20} color='white' {...props} />
                  }}
                />
                <Stack.Screen 
                  name="Task8" 
                  component={Task8} 
                  options={{
                    headerStyle:{backgroundColor: '#52197F'},
                    headerTitleStyle:{color: 'white'},
                    headerBackImage: props => <Icon name='arrow-left' size={20} color='white' {...props} />
                  }}
                />
            </Stack.Navigator>
        
      );
}

export default navigationOnboarding;