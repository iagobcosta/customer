import React, { Component, useState} from 'react'
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native'
import { Card } from 'react-native-paper';

import md5 from 'md5'

import ButtonDefault from '../../components/Button'
import TextInputDefault from '../../components/TextInputDefault'

import TextDefault from '../../components/TextDefault'

import store from '../../Service/storage'
import { rest_baseUrl } from '../../Service/Api'

export default class Task7 extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            id: props.route.params.id,
            companys: props.route.params.companys,
            loading:false,
            username:props.route.params.username,
            password:props.route.params.password,
            cardPassword:'',
            cardConfirmPassword:'',
            disabled:true,
            error:false,
            textError:'',

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlechangeCardPassword = this.handlechangeCardPassword.bind(this)
        this.handlechangeCardConfirmPassword = this.handlechangeCardConfirmPassword.bind(this)
    }

    showLoader = () => { this.setState({ loading:true }); };
    hideLoader = () => { this.setState({ loading:false }); };

    showButton = () => { this.setState({ disabled:false }); };
    hideButton = () => { this.setState({ disabled:true }); };

    showError = () => { this.setState({ error:true }); };
    hideError = () => { this.setState({ error:false }); };

    showTextError = () => { this.setState({ textError:'As senhas não coincidem.' }); };
    hideTextError = () => { this.setState({ textError:'' }); };


    handlechangeCardPassword(inputText) {       
        this.setState({ cardPassword: inputText})        
    }

    handlechangeCardConfirmPassword(inputText) {
        if (this.state.cardPassword != '' && this.state.cardConfirmPassword.length >= 3){
            this.showButton()
        }else{
            this.hideButton()
        }
        this.setState({ cardConfirmPassword: inputText})        
    }
   
    handleSubmit(){
        this.showLoader()
        if(this.state.cardPassword != this.state.cardConfirmPassword){
            this.showError()
            this.showTextError()
            this.hideLoader()
            return
        }else{
            this.hideError()
            this.hideTextError()
            let cardPassword = md5(this.state.cardPassword)
            const dataOnboarding = {
                id: this.state.id,
                cardCode: this.state.companys.cardCode,
                username: this.state.username,
                password: this.state.password,
                cardPassword: cardPassword
            }
            rest_baseUrl.post('/documentos/configuracoes/pesquisar',{
                codigoCadastroUnico: dataOnboarding.id
            }).then((res)=>{
                this.props.navigation.navigate('Task8',{         
                    dataOnboarding: dataOnboarding,
                    documents: res.data
                })
                this.hideLoader()
            }).catch((error)=>{
                console.log(error)
                this.hideLoader()
            })
            this.hideLoader()
           
        }
        
    }

    render(){
        const { loading, disabled, cardConfirmPassword, cardPassword, error, textError} = this.state       

        return (
            <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" enabled>
                <TextDefault 
                 text= 'Agora cadastre abaixo a senha do seu cartão somapay'
                 fontSize={18}
                />
                <ScrollView style={styles.scrollView}>
                    <Card style={styles.card}>
                        <TextDefault 
                            text= 'Uma dica! Não cadastre a senha com sequência numéricas fáceis(Exemplos: 1234, 1111, 2222 ...).'
                            fontSize={14}
                            color='#FF7F00'
                        />  
                        <TextInputDefault
                            label='senha'
                            value={cardPassword}
                            secureTextEntry={true}
                            onChangeText={this.handlechangeCardPassword}
                            error={error}
                            paragraph1='pode conter letras e números.'
                        />
                         <TextInputDefault
                            label='confirme a senha'
                            value={cardConfirmPassword}
                            secureTextEntry={true}
                            error={error}
                            onChangeText={this.handlechangeCardConfirmPassword}
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
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center'
    },
    card:{
        padding: 10
    },
    scrollView:{
        width:'100%',
        padding: 7
    },
    button:{
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    }
});