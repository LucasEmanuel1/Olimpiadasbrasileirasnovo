import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'https://obquimica.org/noticias/index/provas-e-gabarito-exames-estaduais-aplicadas-em-28-03-2021' }}
      style={{ marginTop: 20 }}
    />
  )
}