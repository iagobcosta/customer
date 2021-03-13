import React, { Component, useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'

import ButtonDocument from '../../components/ButtonDocument'
import Camera from '../../components/Camera'

import ButtonDefault from '../../components/Button'
import TextDefault from '../../components/TextDefault'
export default class Task8 extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            dataOnboarding: props.route.params.dataOnboarding,
            documents: props.route.params.documents,
            loading:false,
            disabled:false,
            error:false,
            textError:'',
            textStatus:'Enviado',
            corStatus:'green',
            disabledButton:false,
            startCamera:false,
            previewVisible: false,
            capturedImage: null

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

  

    showLoader = () => { this.setState({ loading:true }); };
    hideLoader = () => { this.setState({ loading:false }); };

    showButton = () => { this.setState({ disabled:false }); };
    hideButton = () => { this.setState({ disabled:true }); };

    showError = () => { this.setState({ error:true }); };
    hideError = () => { this.setState({ error:false }); };

   
    showTextError = () => { this.setState({ textError:'As senhas não coincidem.' }); };
    hideTextError = () => { this.setState({ textError:'' }); };

    ativeCamera = () => { this.setState({ startCamera:true });};

  
    handleSubmit(){
        //this.showLoader()
       console.log(this.state.documents)
    }

    __startCamera = () => {
        this.setState({ startCamera:true });
    }


    render(){
        const { loading, disabled, textStatus, corStatus,disabledButton, startCamera} = this.state
        
        return (           
            <SafeAreaView style={styles.container}>
                { startCamera ? (
                    < Camera 
                    startCamera={startCamera}
                    /> 
                ) : (                
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        >
                        <TextDefault 
                            text= 'Agora vamos cadastrar seus documentos para que usufrua de todoas as funcionalidades do seu app. requisitamos agora as seguintes fotos:'
                            textAlign='center'
                            fontSize={18}
                        />
                        <ScrollView style={styles.scrollView}>
                
                            <ButtonDocument 
                                nameIcon='id-card'
                                nameDocument='RG ou CPF'
                                title={textStatus}
                                corTitle={corStatus}
                                disabled={disabledButton}
                                onPress={this.__startCamera}
                            />
                            
                        </ScrollView>
                        <View style={styles.button}>
                            <ButtonDefault 
                                icon='arrow-right'
                                title='Cadastrar '
                                disabled={disabled}
                                loading={loading}
                                onPress={this.handleSubmit}
                            /> 
                        </View>
                    
                    </View>
                )}
                
            </SafeAreaView>            
           
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-between',
        backgroundColor:'#FFF',
        alignItems:'center'
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
    },
});