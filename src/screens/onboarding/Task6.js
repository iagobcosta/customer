import React, { Component, useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TextInput, Card,Title, Paragraph } from 'react-native-paper';

import ButtonDefault from '../../components/Button'
import TextInputDefault from '../../components/TextInputDefault'

import Underline from  '../../components/Underline'
import TextDefault from '../../components/TextDefault'

import store from '../../Service/storage'
import Api_legacy from '../../Service/Api'
import { termsFormat } from '../../Util/Mask'

export default class Task6 extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            id: props.route.params.id,
            companys: props.route.params.companys,
            loading:false,
            username:'',
            password:'',
            confirmPassword:'',
            disabled:true,
            error:false,
            textError:'',
            erroUsernameIsExist:false

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlechangeUsername = this.handlechangeUsername.bind(this)
        this.handlechangePassword = this.handlechangePassword.bind(this)
        this.handlechangeConfirmPassword = this.handlechangeConfirmPassword.bind(this)
    }

    showLoader = () => { this.setState({ loading:true }); };
    hideLoader = () => { this.setState({ loading:false }); };

    showButton = () => { this.setState({ disabled:false }); };
    hideButton = () => { this.setState({ disabled:true }); };

    showError = () => { this.setState({ error:true }); };
    hideError = () => { this.setState({ error:false }); };

    showErroUsernameIsExist = () => { this.setState({ erroUsernameIsExist:true }); };
    hideErroUsernameIsExist = () => { this.setState({ erroUsernameIsExist:false }); };

    showTextError = () => { this.setState({ textError:'As senhas não coincidem.' }); };
    showTextErrorUserIsExist = () => { this.setState({ textError:'Já existe um usuário com esse nome!.' }); };
    hideTextError = () => { this.setState({ textError:'' }); };

    handlechangeUsername(inputText) {
        this.setState({ username: inputText})
    }

    handlechangePassword(inputText) {       
        this.setState({ password: inputText})        
    }

    handlechangeConfirmPassword(inputText) {
        if (this.state.username != '' && this.state.password != '' && this.state.confirmPassword.length >= 5){
            this.showButton()
        }else{
            this.hideButton()
        }
        this.setState({ confirmPassword: inputText})        
    }
   
    handleSubmit(){
        this.showLoader()
        if(this.state.password != this.state.confirmPassword){
            this.showError()
            this.showTextError()
            this.hideLoader()
        }else{
            this.hideError()
            this.hideTextError()
        }
        let username = this.state.username.toString().trim()
        Api_legacy.post(`/onBoarding/checkUsernameAvailability?username=${username.toUpperCase()}`)
            .then((res)=>{
                console.log(res.data)
                this.hideErroUsernameIsExist()
            })
            .catch((error)=>{
                this.showErroUsernameIsExist()
                this.showTextErrorUserIsExist()
                console.log(error)
                this.hideLoader()
            })  
        
      
    }

    render(){
        const { loading, username, disabled, password, confirmPassword, error, textError, erroUsernameIsExist} = this.state       

        return (
            <View style={styles.container}>
                <TextDefault 
                 text= 'Agora cadastre abaixo um usuário e senha para acessar o app'
                 fontSize={18}
                />
                <ScrollView style={styles.scrollView}>
                    <Card style={styles.card}>
                        <TextDefault 
                            text= 'Uma dica! Não cadastre a senha com sequência numéricas fáceis(Exemplos: 123456, 111111, 222222 ...).'
                            fontSize={14}
                            color='#FF7F00'
                        />                  
                        <TextInputDefault
                            label='usuário'
                            value={username}
                            error={erroUsernameIsExist}
                            onChangeText={this.handlechangeUsername}
                            paragraph1='Deve conter apenas letras e números.'
                            paragraph2='Não deve conter pontos, traços ou espaços.'
                        />
                        <TextInputDefault
                            label='senha'
                            value={password}
                            secureTextEntry={true}
                            onChangeText={this.handlechangePassword}
                            error={error}
                            paragraph1='pode conter letras e números.'
                        />
                         <TextInputDefault
                            label='confirme a senha'
                            value={confirmPassword}
                            secureTextEntry={true}
                            error={error}
                            onChangeText={this.handlechangeConfirmPassword}
                        />
                        <Text style={{color:'red', fontSize:14}}>{textError}</Text>
                    </Card>
                    <View style={styles.button}>
                        <ButtonDefault 
                            icon='arrow-right'
                            title='Cadastrar '
                            disabled={disabled}
                            loading={loading}
                            onPress={this.handleSubmit}
                        /> 
                    </View>
                
                </ScrollView>                
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    card:{
        flex:1,
        padding: 10
    },
    scrollView:{
        flex:1,
        width:'100%',
        padding: 7
    },
    button:{
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    }
});