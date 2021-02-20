import React, { Component} from 'react'
import { View, StyleSheet } from 'react-native'
import ButtonDefault from '../../components/Button'
import TextDefault from '../../components/TextDefault'
import Api_legacy from '../../Service/Api'

export default class Task2 extends Component {

    constructor(props) {
        super(props)    
        this.state = { 
            exported: props.route.params.exported,
            id: props.route.params.id,
            name: props.route.params.name,
            number:'',
            ddd: '',
            ddi: '55',
            type: 'ONBOARDING_LEGACY',
            loading: false,
            visible:false
        }
        this.initInformation = this.initInformation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    showLoader = () => { this.setState({ loading:true }); };
    hideLoader = () => { this.setState({ loading:false }); };
    

    initInformation(values){
        console.log(values)
        this.setState({ddd: values.ddd, number: values.number});
    }

    async componentDidMount(){
        try{
            let resp = await Api_legacy.get(`/onBoarding/clients/${this.state.id}/phones`)
            const values = {
                ddd: resp.data[0].ddd.toString(),
                number: resp.data[0].number.toString()
            }
              this.initInformation(values)  
        }catch(e){

        }
        
    }

    handleSubmit(){
        this.showLoader()

        Api_legacy.post('/onBoarding/sms/send',{
            ddi: this.state.ddi,
            ddd: this.state.ddd,
            number: this.state.number,
            type: this.state.type
        })
        .then((resp) =>{            
            this.props.navigation.navigate('Task3', {
                messageId: resp.data.messageId,
                number: this.state.number,
                ddd: this.state.ddd,
                id: this.state.id
            })
                this.hideLoader()
            })
        .catch((error) =>{
            this.hideLoader()
        })
    }

    render(){
        const { name, number, ddd, loading } =  this.state
        return(
            <View style={styles.container}>
                <TextDefault 
                    text={`Olá ${name} para confirmarmos seu telefone, enviaremos um SMS para o número abaixo contendo um código, que será requisitado na próxima tela.`}
                    fontSize={20}
                />
                <TextDefault 
                    text={`(${ddd}) ${number}`}
                    fontSize={20}
                />
                <TextDefault 
                    text='Caso esse não seja seu telefone celular, por gentileza entre em contato com seu empregador e peça a alteração do seu cadastro no sistema.'
                    fontSize={20}
                />
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
        flex:1
    },
})