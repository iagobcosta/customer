import React, { Component, useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import ButtonDefault from '../../components/Button'
import Company from '../../components/Company'

import Underline from  '../../components/Underline'
import TextDefault from '../../components/TextDefault'

import store from '../../Service/storage'
import Api_legacy from '../../Service/Api'
import { termsFormat } from '../../Util/Mask'

export default class Task5 extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            id: props.route.params.id,
            terms: props.route.params.terms,
            companys: props.route.params.companys,
            loading:false,

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    showLoader = () => { this.setState({ loading:true }); };
    hideLoader = () => { this.setState({ loading:false }); };

   
    handleSubmit(){
        this.showLoader()
        this.props.navigation.navigate('Task6',{         
            id: this.state.id,
            companys: this.state.companys
        })
      
    }

    render(){
        const { loading, terms} = this.state

        return (
            <View style={styles.container}>
                <TextDefault 
                 text= 'TERMOS DE USO SOMAPAY'
                 fontSize={18}
                />
                <ScrollView>
                   <Text style={styles.terms}>
                       {termsFormat(terms)}
                    </Text>
                    <ButtonDefault 
                    icon='arrow-right'
                    title='Aceitar '
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