import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'http://www.oba.org.br/site/?p=conteudo&idcat=36&pag=conteudo&m=s' }}
      style={{ marginTop: 20 }}
    />
  )
}