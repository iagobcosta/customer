import React from 'react'
import Dialog from "react-native-dialog";

export default props => {
    return (
        <Dialog.Container visible={props.visible}>
            <Dialog.Title>Ops!</Dialog.Title>
            <Dialog.Description>{props.text}</Dialog.Description>
            <Dialog.Button label='Certo' onPress={props.onPress}/>
        </Dialog.Container>
    )
}