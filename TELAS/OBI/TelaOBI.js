import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const TelaOBI = ({navigation}) => {
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
            Olimpíada Brasileira de Informática
          </Text>
          <Image
        style={styles.logoobi}
        source={{
          uri: 'http://noic.com.br/wp-content/uploads/2013/05/obi.png',
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
            onPress={() => navigation.navigate('CalendarioOBI')}
            title="CALENDÁRIO"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ProvasOBI')}
            title="PROVAS ANTERIORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('VencedoresOBI')}
            title="VENCEDORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ConteudosOBI')}
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
  logoobi:{
    padding: 5,
    height: 270,
    width: 270,
    resizeMode:50
  }
});


export default TelaOBI;