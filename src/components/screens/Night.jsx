import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NocheScreen = () => {
  return (
    <LinearGradient colors={['#000000', '#1A237E']} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../recursos/images/noche.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Fiesta de Noche</Text>
      </View>

      <View style={styles.content}>
        {/* Aquí puedes agregar más elementos visuales relacionados con la temática */}
        <Text style={styles.description}>Aca hay que flasharla tincho</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  content: {
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default NocheScreen;
