import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const ConteudosONHB = ({navigation}) => {
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
            Conteúdos ONHB
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Segundo Reinado 
Governos pós-Ditadura Militar,
Era Vargas,
República Velha, 
Administração colonial,
Ditadura Militar,
Sistema e economia colonial, 
República Populista, 
Crise do Sistema Colonial, 
Processo de Independência.

          </Text>
          <Image
        style={styles.logooba}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ajYUV23xo6blqwjgWflOCwLmWwLeglg4lA&usqp=CAU',
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
    height: 250,
    width: 270,
  }
});

export default ConteudosONHB;