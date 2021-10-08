import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const ConteudosOBMEP = ({navigation}) => {
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
            Conteúdos OBMEP
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
Aritmética: fenômenos periódicos,
Contagem: permutação,
Geometria: áreas e perímetros,
Teorema da Divisão Euclidiana,
Aritmética,
Fatorial e Permutação Simples,
Contagem,
Área de figuras planas,
Resolução de Exercícios: Exercícios de Geometria da OBMEP
          </Text>
          <Image
        style={styles.logooba}
        source={{
          uri: 'https://portal.ifpe.edu.br/campus/caruaru/noticias/participe-da-olimpiada-brasileira-de-astronomia-e-astronautica/oba.png/@@images/image.png',
        }}
      />
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

export default ConteudosOBMEP;