import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const Simulados = ({navigation}) => {
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
              flex: 0.25
            }}>
            Simulados das Provas
          </Text>
          </View>
          <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('SimuladoOBA')}
            title="SIMULADO OBA"
            color="green"
          />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('SimuladoOBI')}
            title="SIMULADO OBI"
            color="green"
          />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('SimuladoOBMEP')}
            title="SIMULADO OBMEP"
            color="green"
          />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('SimuladoOBQ')}
            title="SIMULADO OBQ"
            color="green"
          />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('SimuladoONC')}
            title="SIMULADO ONC"
            color="green"
          />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('SimuladoONHB')}
            title="SIMULADO ONHB"
            color="green"
          />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('SimuladoOBF')}
            title="SIMULADO OBF"
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
});

export default Simulados;