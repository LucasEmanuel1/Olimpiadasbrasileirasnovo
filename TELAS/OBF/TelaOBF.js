import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const TelaOBF = ({navigation}) => {
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
            Olimpíada Brasileira de Física
          </Text>
          <Image
        style={styles.logoobf}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/pt/1/1c/OBF_Logo_Oficial.jpg',
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
            onPress={() => navigation.navigate('CalendarioOBF')}
            title="CALENDÁRIO"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ProvasOBF')}
            title="PROVAS ANTERIORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('VencedoresOBF')}
            title="VENCEDORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ConteudosOBF')}
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
  logoobf:{
    padding: 5,
    height: 230,
    width: 260,
  }
});


export default TelaOBF;