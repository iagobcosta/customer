import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {    
    return (
        <View style={styles.containerButton}>
            <Button
                buttonStyle={{
                    width:'100%',
                    height:90,
                    backgroundColor:'white',
                    borderWidth:1,
                    borderRadius: 10,
                    borderColor:'#52197F',
                    justifyContent:"space-around",
                    flexDirection:'row'

                    
                }}
                icon={<View style={styles.icon}><Icon 
                                name={props.nameIcon}
                                size={25}
                                color='#52197F'
                                />
                        <Text style={styles.textIcon}> {props.nameDocument}</Text>
                    </View>}
                titleStyle={{color: props.corTitle == null ? '#52197F' : props.corTitle}}
                title={props.title == null ? 'Aguardando envio' : props.title}
                disabled={props.disabled}
                onPress={props.onPress}
                        
            />
        </View>
    )
}
const styles = StyleSheet.create({
    containerButton:{
        padding:20
    },
    textIcon:{
        fontSize:15
    },
    icon:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    }
})