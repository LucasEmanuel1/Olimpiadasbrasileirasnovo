import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const VencedoresOBF = ({navigation}) => {
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
            Vencedores OBF
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Medalha de Ouro
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -Caio Augusto Siqueira da Silva
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -Ualype de Andrade Uchoa
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -Lucas Takayasu
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Medalha de Prata
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -Abner Maia de Oliveira
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -Vinicius da Silveira Lanza Avelar
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -Felipe Abreu braca
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Medalha de Bronze
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -Enzo Medeiros Costa
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -Ângelo de Carvalho Nunes
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            -João Pedro tambosi
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

export default VencedoresOBF;