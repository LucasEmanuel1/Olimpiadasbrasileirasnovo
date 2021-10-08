import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const TelaONC = ({navigation}) => {
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
            Olimpíada Nacional de Ciências
          </Text>
          <Image
        style={styles.logooba}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5v_TAWU4hpZvlGDbJbUh37VXq_q7fZhRVxA&usqp=CAU',
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
            onPress={() => navigation.navigate('CalendarioONC')}
            title="CALENDÁRIO"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ProvasONC')}
            title="PROVAS ANTERIORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('VencedoresONC')}
            title="VENCEDORES"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ConteudosONC')}
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
export default TelaONC;