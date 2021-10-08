import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(){
  return(
    <WebView
      source={{ uri: 'https://play.google.com/store/apps/details?id=com.mobtex.onc.questoes' }}
      style={{ marginTop: 20 }}
    />
  )
}