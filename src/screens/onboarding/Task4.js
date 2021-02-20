import React, { Component, useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ButtonDefault from '../../components/Button'
import Company from '../../components/Company'

import Underline from  '../../components/Underline'
import TextDefault from '../../components/TextDefault'

import store from '../../Service/storage'
import Api_legacy from '../../Service/Api'

export default class Task4 extends Component {

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
        this.showLoader()
        Api_legacy.get('/onBoarding/termsOfUse')
            .then((res)=>{
                this.props.navigation.navigate('Task5',{
                    terms: res.data,
                    id: this.state.id,
                    companys: this.state.companys
                })
               
                this.hideLoader()
            })
            .catch((error) =>{
                
            })
       
      
    }

    render(){
        const { loading, companys} = this.state

        return (
            <View style={styles.container}>
                <TextDefault 
                 text= 'Empresa que você está trabalhando atualmente!'
                 fontSize={18}
                />
                <View style={styles.list}>
                    <Company 
                        name={companys.name}
                        productName={companys.productName.trim()}                            
                    />
                </View>
                
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
    list:{
        flex:1
    }
});