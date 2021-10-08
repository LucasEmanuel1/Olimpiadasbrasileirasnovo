import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const TelaOBQ = ({navigation}) => {
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
            Olimpíada Brasileira de Química
          </Text>
          <Image
        style={styles.logooba}
        source={{
          uri: 'http://escolaedelimantovani.com.br/wp-content/uploads/2020/07/logo-obq-1024x576.jpg',
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
            onPress={() => navigation.navigate('CalendarioOBQ')}
            title="CALENDÁRIO"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ProvasOBQ')}
            title="PROVAS ANTERIORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('VencedoresOBQ')}
            title="VENCEDORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ConteudosOBQ')}
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
export default TelaOBQ;