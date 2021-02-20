import React from  'react'
import { Text } from 'react-native-elements'

export default props => {
    return (
       <Text style={{
           fontSize:props.fontSize,
           color:'#52197F',
           margin: 20
           }}>
           {props.text}
       </Text>
    )
}
