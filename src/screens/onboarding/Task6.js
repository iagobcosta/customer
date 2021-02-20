import React, { Component, useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import ButtonDefault from '../../components/Button'
import Company from '../../components/Company'

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

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    showLoader = () => { this.setState({ loading:true }); };
    hideLoader = () => { this.setState({ loading:false }); };

   
    handleSubmit(){
        
      
    }

    render(){
        const { loading, terms} = this.state

        return (
            <View style={styles.container}>
                <TextDefault 
                 text= 'Agora cadastre abaixo um usuário e senha para acessar o app'
                 fontSize={18}
                />
                <ScrollView>
                <TextDefault 
                 text= 'Deve conter apenas letras e números.'
                 fontSize={10}/>
                <TextDefault 
                 text= 'Não deve conter pontos, traços ou espaços.'
                 fontSize={10}/>

                    <ButtonDefault 
                    icon='arrow-right'
                    title='Cadastrar '
                    loading={loading}
                    onPress={this.handleSubmit}
                /> 
                </ScrollView>
                
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        alignItems:'center'
    },
    terms:{
        textAlign: 'justify',
        padding:15,
        backgroundColor: '#F8F8FF',
        borderRadius:30
    }
});