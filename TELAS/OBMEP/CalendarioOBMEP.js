import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'http://www.obmep.org.br/calendario.htm' }}
      style={{ marginTop: 20 }}
    />
  )
}