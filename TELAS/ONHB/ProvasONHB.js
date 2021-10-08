import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'https://www.olimpiadadehistoria.com.br/paginas?CFP=0&ONHB=1' }}
      style={{ marginTop: 20 }}
    />
  )
}