// LanguageItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ name, experience, logo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.experience}>Опыт: {experience}</Text>
      <Image source={{ uri: logo }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  experience: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default LanguageItem;
