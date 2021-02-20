import React from  'react'
import { StyleSheet, View} from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
        <View style={styles.viewButton}>
            <Button buttonStyle={styles.button}
                icon={
                    <Icon
                    name={props.icon}
                    size={15}
                    color="white"
                    />
                }
                iconRight
                loading={props.loading}
                title={props.title}
                onPress={props.onPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        width:250,
        height:55,
        padding: 10,
        backgroundColor:'#52197F',
        borderRadius:10
    },
    viewButton:{
        flex:1,
        alignItems:'center',
        justifyContent: 'flex-end',
        margin:20
    },
});