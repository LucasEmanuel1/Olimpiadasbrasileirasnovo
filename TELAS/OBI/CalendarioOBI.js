import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'https://olimpiada.ic.unicamp.br/calendario/obi_completo' }}
      style={{ marginTop: 20 }}
    />
  )
}