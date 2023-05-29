import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({ navigation }) => {
  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <LinearGradient
      colors={['#101010', '#404040']}
      style={styles.container}
    >

    <View style={styles.container}>

      <View style={styles.row}>
          
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
      </View>

      <View style={styles.row}>
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
    
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //aspectRatio: 1,
    
  },
  button1: {
    width: 200,
    height: 200,
    backgroundColor: "#13839C",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'white',
    margin: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,


  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },

  button2: {
    width: 200,
    height: 200,
    backgroundColor: "#485E88",
    borderRadius: 10,
    marginBottom: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },

  button3: {
    width: 200,
    height: 200,
    backgroundColor: "#B03723",
    borderRadius: 10,
    marginBottom: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },

  button4: {
    width: 200,
    height: 200,
    backgroundColor: "#C95727",
    borderRadius: 10,
    marginBottom: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },

});

export default Home;




