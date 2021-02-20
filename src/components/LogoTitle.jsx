import React from 'react'
import { Image } from 'react-native'


export default props => {
    return(
       <Image
           style={{ width: 155, height: 35}}
           source={require('../../assets/ic_logo_actionbar.png')}
        />
    )
}
 