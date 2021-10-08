import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const ConteudosOBQ = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Conteúdos OBQ
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            O que estudar:
Sugere-se algo semelhante ao requerido para outras olimpíadas nacionais, que é estudar os livros de Química do terceiro ano do Ensino Médio e revisar provas anteriores. Para maior aprofundamento, pede-se um estudo aprofundado em livros simples, porém não muito além do Ensino Médio, como o do Peter Atkins, livro de capa preta grossa. Para Química Orgânica, mostrada com maior ênfase para os alunos da Modalidade B, uma boa fonte de reações de todo tipo é o livro do Allinger, grosso e de capa vermelha.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
   botao:{
     padding: 5,
  },
  logooba:{
    padding: 5,
    height: 200,
    width: 270,
  }
});

export default ConteudosOBQ;