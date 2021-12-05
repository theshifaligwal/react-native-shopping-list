import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Import component
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
  },
});
