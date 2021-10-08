import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const TelaOBA = ({navigation}) => {
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
            Olimpíada Brasileira de Astronomia
          </Text>
          <Image
        style={styles.logooba}
        source={{
          uri: 'https://portal.ifpe.edu.br/campus/caruaru/noticias/participe-da-olimpiada-brasileira-de-astronomia-e-astronautica/oba.png/@@images/image.png',
        }}
      />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('TelaOBA')}
            title="SITE OFICIAL"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('CalendarioOBA')}
            title="CALENDÁRIO"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ProvasOBA')}
            title="PROVAS ANTERIORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('VencedoresOBA')}
            title="VENCEDORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ConteudosOBA')}
            title="PRINCIPAIS CONTEÚDOS"
            color="green"
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


export default TelaOBA;