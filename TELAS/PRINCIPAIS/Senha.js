import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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

export default function App() {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Recupere sua senha</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() =>
          Alert.alert('Uma Senha Temporária foi enviada para o seu email!')
        }>
        <Text style={styles.loginText}>RECUPERAR SENHA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 25,
  },

  loginText: {
    color: 'white',
  },

  inputView: {
    backgroundColor: 'green',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: -50,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 120,
    backgroundColor: 'green',
  },
});
