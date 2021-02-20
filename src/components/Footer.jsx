import React from  'react'
import { View, StyleSheet, Text } from 'react-native'

export default props => (
    <View style={styles.footer}>
       <Text>v1.0.0</Text>
    </View>
)

const styles = StyleSheet.create({
 footer:{
     backgroundColor: '#52197F',
 }
});