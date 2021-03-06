import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,SafeAreaView , TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'

export default props => {
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    if (hasPermission === null) {
        return (<View></View>)
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    if (props.startCamera){
        return (
           
              <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}>
                    <Text style={styles.text}> Flip </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
          )
    }
}

const styles = StyleSheet.create({
    
    camera: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });