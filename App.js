import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Login from './src/components/login.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./recursos/images/fondo3.jpg')}
        resizeMode={'cover'}
        blurRadius={0.8}>
        <Login />
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  }
});
