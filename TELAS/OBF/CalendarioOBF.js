import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'http://www.sbfisica.org.br/v1/olimpiada/2021/index.php/calendario' }}
      style={{ marginTop: 20 }}
    />
  )
}