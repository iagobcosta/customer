import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import {Image} from 'react-native-elements';
import { Dimensions } from 'react-native';
import CardSmallButton from '../../src/components/CardSmallButton'
import { Card } from 'react-native-elements'


export default function Home({ navigation }) {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const entrarChat = () => {
    navigation.navigate('Chat') 
  }

  const entrarOnboarding = () => {
    console.log("Entrou")
    navigation.navigate('Onboarding') 
  }
  
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="inverted" />
      <View style={styles.container}>
        <View > 
          <Image
            source={require('../../assets/banner1.jpeg')}
            style={{ width: windowWidth, height: 300, resizeMode: 'stretch',}}
          />
        </View> 
          <Card containerStyle={styles.card}>
                <View style={styles.buttons}>
                <CardSmallButton 
                  colorIcon='#52197F'
                  icon='comments'
                  titleButton='Atendimento'
                  titleColor='#52197F'
                  onPress={() => entrarChat()}    
                />

                <CardSmallButton 
                  colorIcon='#52197F'
                  icon='user-plus'
                  titleButton='Registre-se'
                  titleColor='#52197F'
                  onPress={() => entrarOnboarding()}  
                />

                <CardSmallButton 
                  icon='sign-in'
                  titleButton='Entre na sua conta'
                  colorButtom='#52197F' 
                />
              </View>
          </Card>
           
      </View>
      
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  card:{
    paddingTop:20,
    borderRadius:10,
  },
  buttons:{
    alignItems:'center',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
});
