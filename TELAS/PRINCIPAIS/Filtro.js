import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
const filtro = require('./Olimpiadas.json');


export default function App() {
  const nomes = Object.entries(filtro).map(([key, value]) => {
    return [value.Nome, value.Fundação, value.Sigla, value.Instituição]
  });
  /*const Fundacao = Object.entries(filtro).map(([key, value]) => {
    return value.Fundação
  });
  const Siglas = Object.entries(filtro).map(([key, value]) => {
    return value.Sigla
  });
  const Instituicao = Object.entries(filtro).map(([key, value]) => {
    return value.Instituição
  });**/

  return (
    <View style={styles.container}>
    <TextInput style={styles.input}></TextInput>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {navigation.Navigate('ResultadoFiltro')}}>
        <Text style={styles.loginText}>Filtrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    backgroundColor: 'green',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  SenhaBtn: {
    width: '50%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },

  SenhaText: {
    color: 'black',
    fontWeight: 'bold',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: -50,
    backgroundColor: 'green',
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'green',
  },
  loginText: {
    color: 'white',
  },
  input: {
    width: 200,
    borderRadius:4,
    height: 40,
    textAlign: 'center',
    marginVertical: 10,

  },
});
