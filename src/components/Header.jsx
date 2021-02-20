import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'

export default props => (
    <View>      
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          leftComponent={{}}
          centerComponent={{ text: 'Somapay', style: { color: '#fff'} }}
          containerStyle={{
            backgroundColor: '#52197F',
            justifyContent: 'space-around',
          }}
        />
    </View>
)