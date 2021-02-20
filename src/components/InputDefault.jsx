import React from  'react'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
        <Input
            label={props.label}
            placeholder={props.placeholder}
            leftIcon={
                <Icon style={{padding:10}}
                name={props.icon}
                size={24}
                color='#52197F'
                />
            }
            style={{color:'#52197F'}}
            placeholderTextColor='#52197F'
            labelStyle={{color:'#52197F'}}
            autoFocus={props.autoFocus}
            maxLength={props.maxLength}
            errorStyle={{color:'red'}}
            errorMessage={props.textErroInput}
            value={props.value}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
        />
    )
}