import React, { Component} from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView} from 'react-native'
import { Card } from 'react-native-elements'

import { cpfMask, mascaraData, formatDate } from '../../Util/Mask'
import ButtonDefault from '../../components/Button'
import InputDefault from '../../components/InputDefault'
import TextDefault from '../../components/TextDefault'
import Dialog from '../../components/Dialog'

import { legacy_baseUrl } from '../../Service/Api'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { CommonActions } from '@react-navigation/native';
import stylesUnderline from '../../styles/stylesUnderline'


export default class Task1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = { 
            cpf: '',
            birthday: '', 
            loading: false, 
            TextErro:'', 
            visible:false, 
            textErroInputCpf:'',
            textErroInputDate:'',
        }
        this.handlechange = this.handlechange.bind(this)
        this.handlechangeDate = this.handlechangeDate.bind(this)
        this.hideDialog = this.hideDialog.bind(this)
        this.ErrorInputCpf = this.ErrorInputCpf.bind(this)
        this.ErrorInputData = this.ErrorInputData.bind(this)

       
      }

      showLoader = () => { this.setState({ loading:true }); };
      hideLoader = () => { this.setState({ loading:false }); };

      hideDialog(){ 
          this.setState({ visible: false });
      };

      ErrorInputCpf(value){
          this.setState({textErroInputCpf: value})
      }

      ErrorInputData(value){
        this.setState({textErroInputDate: value})
      }
    
      handlechange(inputText) {
        if(this.state.cpf.length === 13){
            this.ErrorInputCpf('')
        }
        this.setState({ cpf: cpfMask(inputText) })
        
      }

      handlechangeDate(inputDate){
        if(this.state.birthday.length === 9){
            this.ErrorInputData('')
        }
          this.setState({birthday: mascaraData(inputDate)})
      }

    
       handleFormSubmit = event => {
        this.showLoader()
        const user = {
          cpf: this.state.cpf,
          birthday: formatDate(this.state.birthday)
          
        }
        console.log(user.birthday)
        if(user.cpf == null || user.cpf == '' || user.cpf.length < 14){
            this.ErrorInputCpf('Campo CPF é obrigatório!')
            this.hideLoader()
        }
        else if(user.birthday == null || user.birthday == '' || user.birthday == '--' || user.birthday.length < 10){
            this.ErrorInputData('Campo Data de Nascimento é obrigatório!')
            this.hideLoader()
        }else{
            
            legacy_baseUrl.post('/onBoarding/validateBirthday',{
                    cpf: user.cpf,
                    birthday: user.birthday
            }).then((response) => {
                legacy_baseUrl.get(`/onBoarding/clients/${response.data.id}/phones`)
                    .then((res)=>{
                       this.props.navigation.navigate('Task2', {
                            exported: response.data.exported ,
                            id: response.data.id,
                            ddd: res.data[0].ddd.toString(),
                            number: res.data[0].number.toString(),
                            name: response.data.name
                        });
                        this.hideLoader()
                    })
                    .catch((error)=>{
                        if (error.response) {                
                            let erro = Object.assign({}, error.response.data);
                            console.log(erro.errors[0].errorDetail);
                            this.setState({visible:true,TextErro:erro.errors[0].errorDetail.toString()})
                        }
                        this.hideLoader()
                    })
                
            })
            .catch((error) => {
                if (error.response) {                
                    let erro = Object.assign({}, error.response.data);
                    console.log(erro.errors[0].errorDetail);
                    this.setState({visible:true,TextErro:erro.errors[0].errorDetail.toString()})
                }
                this.hideLoader()
            });
        }
      };

    render(){
        const { cpf, birthday, loading, TextErro, visible, textErroInputCpf, textErroInputDate } = this.state
       
        return(
            <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" enabled>
                         
                    <Dialog text={TextErro} visible={visible} onPress={this.hideDialog}/>
                    <TextDefault
                        text='Informe seu CPF e data de nascimento'
                        fontSize={20}
                    />
                    <ScrollView style={styles.scrollView}>
                    <Card>                
                        <InputDefault
                            label='CPF'
                            placeholder='***.***.***-**'
                            icon='id-card'
                            maxLength={14}
                            autoFocus={true}
                            textErroInput={textErroInputCpf}
                            value={cpf}
                            keyboardType='numeric'
                            onChangeText={this.handlechange}
                        />

                        <InputDefault
                            label='Data de Nascimento'
                            placeholder='**/**/****'
                            icon='calendar'
                            maxLength={10}
                            textErroInput={textErroInputDate}
                            value={birthday}
                            keyboardType='numeric'
                            onChangeText={this.handlechangeDate}
                        />
                    </Card>
                    <ButtonDefault 
                        icon='arrow-right'
                        title='Continuar '
                        loading={loading}
                        onPress={this.handleFormSubmit}
                    /> 
                    </ScrollView>
                   
                </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       
    },
    text:{
        margin: 20,
        fontSize:20,
        color:'#52197F'
    },
    scrollView:{
        //flex:1,
        width:'100%',
    },
});