import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'https://noic.com.br/materiais-fisica/listas/' }}
      style={{ marginTop: 20 }}
    />
  )
}