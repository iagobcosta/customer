import React, { Component, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonDefault from '../../components/Button'

import Underline from  '../../components/Underline'
import TextDefault from '../../components/TextDefault'

import store from '../../Service/storage'
import { legacy_baseUrl } from '../../Service/Api'

export default class Task3 extends Component {

    constructor(props) {
        super(props)        
        this.state = { 
            messageId: props.route.params.messageId,
            number: props.route.params.number,
            ddd: props.route.params.ddd,
            id: props.route.params.id,
            loading: false,
            messageError: '', 

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.ErrorInputCode = this.ErrorInputCode.bind(this)
        
    }

    showLoader = () => { this.setState({ loading:true }); };
    hideLoader = () => { this.setState({ loading:false }); };

    ErrorInputCode(value){
        this.setState({messageError: value})
    }

   

    
    handleSubmit(){
        this.showLoader()
        store.get('messageId')
            .then((res) => {
              const numberInform = {
                    value: res
                }
                
                if(numberInform.value.length < 4){
                    this.ErrorInputCode('Informe os 4 dígitos do código')
                    this.hideLoader()
                    return
                }else{
                    this.ErrorInputCode('')
                    legacy_baseUrl.post('/onBoarding/sms/confirm',{
                        code: numberInform.value,
                        type: 'ONBOARDING_LEGACY',
                        messageId: this.state.messageId
                    }).then(res => {
                        legacy_baseUrl.get(`/onBoarding/clients/${this.state.id}/companies`)
                        .then(resp => {
                            let companys = Object.assign({}, resp.data);
                            
                            this.props.navigation.navigate('Task4',{
                                companys: companys[0],
                                id: this.state.id
                            })

     
                        })
                        .catch(error => {

                        })

                        

                    }).catch((error) => {
                        this.ErrorInputCode('Código inválido! informe novamente o código.')
                        this.hideLoader()
                    })

                }
            })
        
    }

    
    render(){
        

        const { ddd, number, loading, messageError} = this.state


        return (
            <View style={styles.container}>
                <TextDefault 
                 text={`Agora digite o código que emviamos para o seu número (${ddd}) ${number}`}
                 fontSize={18}
                />
               <Underline />
               <Text style={styles.messageError} >{messageError}</Text>
                <ButtonDefault 
                    icon='arrow-right'
                    title='Continuar '
                    loading={loading}
                    onPress={this.handleSubmit}
                />  
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
    text:{
        margin: 20,
        fontSize:20,
        color:'#52197F'
    },
    messageError:{
        color:'red',
        marginTop: -100
    }
});