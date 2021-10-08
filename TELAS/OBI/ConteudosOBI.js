import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const ConteudosOBI = ({navigation}) => {
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
            Conteúdos OBI
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Saber programar em ao menos uma das linguagens (C, C++, Java, Javascript e Python.)

Na Modalidade Iniciação, praticar sua capacidade lógica e analítica é suficiente para solucionar os problemas exigidos. Entretanto, na Modalidade Programação é necessário aprender conteúdos mais extensos, como estruturas de dados, algoritmos e análise da complexidade dos programas.

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

export default ConteudosOBI;