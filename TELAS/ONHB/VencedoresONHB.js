import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const VencedoresONHB = ({navigation}) => {
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
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Acre: 1 medalhas (1 prata)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Bahia: 4 medalhas (3 bronze, 1 prata)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Ceará: 25 medalhas (11 bronze, 9 prata e 5 ouro)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Minas Gerais: 1 medalha (1 prata)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Pará: 1 medalha ( 1 bronze)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Paraíba: 2 medalhas (1 bronze, 1 prata)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Pernambuco: 15 medalhas (6 bronze, 5 prata, 4 ouro)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Rio de Janeiro: 2 medalhas (2 bronze)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Rio Grande do Norte: 13 medalhas (7 bronze, 5 prata e 1 ouro)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Rio Grande do Sul: 1 medalha (1 prata)
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            São Paulo: 10 medalhas ( 4 bronze, 1 prata e 5 ouro)
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

export default VencedoresONHB;