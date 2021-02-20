import React, { Component } from 'react'
import {View, StyleSheet, Text } from 'react-native'

export default props => {

    const checkOrNotStyle = props.noCheck != null ? { textDecorationLine: 'line-through' } : {}

    return (
        <View style={styles.container}>
                              
                <View >
                    <Text style={[checkOrNotStyle]}>{props.name} - {props.productName}</Text>
                </View>
            
            
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 20
    },
})