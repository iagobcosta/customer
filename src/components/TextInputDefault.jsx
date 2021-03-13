import React from  'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Card, Divider, Paragraph } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
        <Card.Content>
            <View>
                <TextInput mode='outlined' 
                    style={styles.input}
                    label={props.label}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={props.secureTextEntry}
                    autoFocus={props.autoFocus}
                    theme={{
                        colors:{
                            primary: '#52197F',
                        }
                    }}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    error={props.error}
                />
                <View style={styles.paragraph}>
                    <Paragraph style={{color:'#52197F'}}>{props.paragraph1}</Paragraph>
                    <Paragraph style={{color:'#52197F'}}>{props.paragraph2}</Paragraph>
                </View>
            </View>
        </Card.Content> 
    )
}



const styles = StyleSheet.create({
    paragraph:{
        paddingLeft: 13,
    },
});