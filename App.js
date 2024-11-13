// App.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LanguageItem from './LanguageItem';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);


  const [languages, setLanguages] = useState([
    {
        id: '1',
        name: 'Python',
        experience: '5 лет',
        logo: 'https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png',
    },
    {
      id: '2',
      name: 'JavaScript',
      experience: '4 года',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      id: '3',
      name: 'Rust',
      experience: '3 года',
      logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/rust_lang_logo_icon_169776.png'
    },
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LanguageItem name={item.name} experience={item.experience} logo={item.logo} />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
