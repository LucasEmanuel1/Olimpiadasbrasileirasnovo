import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = require('./Perguntas.json');

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}><Text style={styles.title}>Olimpiada: {item.OLIMPIADA} | Pergunta: {item.PERGUNTA} Letra: {item.ALTERNATIVA1} | Letra: {item.ALTERNATIVA2} | Letra: {item.ALTERNATIVA3} |  Letra:{item.ALTERNATIVA4} | Resposta: {item.CORRETA}</Text></View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 12,
    color: 'white',
  },
});

export default App;