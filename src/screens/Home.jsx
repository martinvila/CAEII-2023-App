import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Home = ({ navigation }) => {
  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => handleButtonPress('Inscripciones')}
      >
        <Text style={styles.buttonText}>Inscripción</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => handleButtonPress('Cronograma')}
      >
        <Text style={styles.buttonText}>Cronograma</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button3}
        onPress={() => handleButtonPress('Pilares')}
      >
        <Text style={styles.buttonText}>Pilares</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button4}
        onPress={() => handleButtonPress('Asistente')}
      >
        <Text style={styles.buttonText}>Manual Asistente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#101010"
  },
  button1: {
    width: 150,
    height: 150,
    backgroundColor: "#13839C",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },

  button2: {
    width: 150,
    height: 150,
    backgroundColor: "#485E88",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button3: {
    width: 150,
    height: 150,
    backgroundColor: "#B03723",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button4: {
    width: 150,
    height: 150,
    backgroundColor: "#C95727",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default Home;
