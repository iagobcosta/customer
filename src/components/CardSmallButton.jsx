import React from  'react'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => (
   
        <Button buttonStyle={{ 
            width:100,
            height:80,
            padding:2,
            justifyContent: 'center',
            alignItems:'center',
            flexDirection: 'column', 
            backgroundColor: props.colorButtom,
            borderWidth: 1,
            borderRadius: 10,
            borderColor:'#52197F',           
          }}
            icon={
              <Icon
                name={props.icon}
                size={25}
                color={props.colorIcon == null ? 'white': props.colorIcon}
              />
            }
            titleStyle={{color: props.titleColor == null ? 'white': props.titleColor, fontSize: 10}}
            title={props.titleButton}
            onPress={props.onPress}
          />
    
)