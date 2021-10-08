import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const ConteudosOBA = ({navigation}) => {
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
            Conteúdos OBA
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Forças e energia.
Movimento circular,
Leitura e interpretação de gráficos,
Análise dimensional,
Geometria básica,
Nome e características de planetas e satélites naturais,
Rotação e translação da Terra,
Estações do ano,
Movimento das estrelas na esfera celeste,
Leis de Newton e Leis de Kepler e
Geometria plana básica.

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

export default ConteudosOBA;