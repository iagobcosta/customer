import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Chat extends Component {
  

  render() {
    return (
      
        <WebView
          source={{
            uri: 'https://chat.somapay.com.br/'
          }}
          style={{ marginTop: 20 }}
        />
        
    );
  }  
}
