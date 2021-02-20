import React, { Component} from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import { Card } from 'react-native-elements'

import { cpfMask, mascaraData, formatDate } from '../../Util/Mask'
import ButtonDefault from '../../components/Button'
import InputDefault from '../../components/InputDefault'
import TextDefault from '../../components/TextDefault'
import Dialog from '../../components/Dialog'

import Api_legacy from '../../Service/Api'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


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
            textErroInputDate:'' 
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
        
        const user = {
          cpf: this.state.cpf,
          birthday: formatDate(this.state.birthday)
          
        }
        console.log(user.birthday)
        if(user.cpf == null || user.cpf == '' || user.cpf.length < 14){
            this.ErrorInputCpf('Campo CPF é obrigatório!')
            return
        }
        if(user.birthday == null || user.birthday == '' || user.birthday == '--' || user.birthday.length < 10){
            this.ErrorInputData('Campo Data de Nascimento é obrigatório!')
            return
        }else{
            this.showLoader()
            Api_legacy.post('/onBoarding/validateBirthday',{
                    cpf: user.cpf,
                    birthday: user.birthday
            }).then(response => {                
                this.props.navigation.navigate('Task2', {
                    exported: response.data.exported ,
                    id: response.data.id, 
                    name: response.data.name
                });
                this.hideLoader()
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
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>            
                    <Dialog text={TextErro} visible={visible} onPress={this.hideDialog}/>
                    <TextDefault
                        text='Informe seu CPF e data de nascimento'
                        fontSize={20}
                    />
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
                        
                    </TouchableWithoutFeedback>
                    <ButtonDefault 
                            icon='arrow-right'
                            title='Continuar '
                            loading={loading}
                            onPress={this.handleFormSubmit}
                        />  
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        margin: 20,
        fontSize:20,
        color:'#52197F'
    },
});