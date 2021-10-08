import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'http://www.sbfisica.org.br/v1/olimpiada/2019/index.php/provas' }}
      style={{ marginTop: 20 }}
    />
  )
}