import React,{useState, onChangeText}from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Alert, TouchableOpacity} from "react-native";

const UselessTextInput = () => {
  const [nome, setNome] = useState("");
  const mudarNome=()=>{}
  const handleSubmitPress = () => {
    if (nome === 'Lucas') {
          alert('Usuário Existe!');
        }
    if (nome === 'Guruba') {
          alert('Usuário Existe!');
        }
    if (nome === 'Vancledson') {
          alert('Usuário Existe!');
        }
    if (nome === 'Caio') {
          alert('Usuário Existe!');
        }
    if (nome !== nome){
      alert('Usuário Não Existe!');
    }
}
  return (
    <SafeAreaView>
    <Text style={{textAlign: 'center', marginTop: 20}}>Digite um nome de Usuário</Text>
      <TextInput
        style={styles.input}
        onChangeText={text=>setNome(text)}
        value={nome}
      />
      <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>PESQUISAR</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: 'green',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'green',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default UselessTextInput;