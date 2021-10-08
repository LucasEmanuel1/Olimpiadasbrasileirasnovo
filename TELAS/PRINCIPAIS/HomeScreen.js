import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
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
            Olimpíadas Brasileiras
          </Text>
        </View>
        </View>
          <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('Login')}
            title="FAZER LOGIN"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('ResultadoFiltro')}
            title="FILTRAR OLIMPÍADAS"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('FiltroUsuarios')}
            title="FILTRAR USUÁRIOS"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('TelaOBA')}
            title="OLIMPÍADA BRASILEIRA DE ASTRONOMIA"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('TelaOBI')}
            title="OLÍMPIADA BRASILEIRA DE INFORMÁTICA"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('TelaOBMEP')}
            title="OLIMPÍADA BRASILEIRA DE MATEMÁTICA DAS ESCOLAS PÚBLICAS"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('TelaOBQ')}
            title="OLIMPÍADA BRASILEIRA DE QUÍMICA"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('TelaONC')}
            title="OLIMPÍADA NACIONAL DE CIÊNCIAS"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('TelaONHB')}
            title="OLIMPÍADA NACIONAL EM HISTÓRIA DO BRASIL"
            color="green"
          />
      </View>
      <View style={styles.botao}>
          <Button
            onPress={() => navigation.navigate('TelaOBF')}
            title="OLIMPÍADA BRASILEIRA DE FÍSICA"
            color="green"
          />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
   botao:{
     padding: 3,
  },
});

export default HomeScreen;