import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity , Image, Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useRef } from 'react';
import {  PanResponder, Animated } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };
  
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  
  const position = useRef(new Animated.ValueXY()).current;
  
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: position.x,
        dy: position.y,
      },
    ]),
    onPanResponderRelease: () => {
      // Restablece la posición del botón flotante al soltar
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  
  const floatingButtonStyle = {
    ...styles.floatingButton,
    transform: position.getTranslateTransform(),
  };
  
  return (
    <LinearGradient colors={['black', '#202020']} style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button1} onPress={() => handleButtonPress('Inscripciones')}>
          <Image
            source={require('../../recursos/images/Inscrpcion.png')}
            style={styles.button1Image}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => handleButtonPress('Pilares')}>
          <Image
            source={require('../../recursos/images/pilares_menu.png')}
            style={styles.button2Image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button3} onPress={() => handleButtonPress('Cronograma')}>
        <Image
          source={require('../../recursos/images/CronogramaSINFONDO.png')}
          style={styles.button3Image}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.buttonRow2}>
        <TouchableOpacity style={styles.button4} onPress={() => handleButtonPress('Asistente')}>
          <Image
            source={require('../../recursos/images/info.png')}
            style={styles.button1Image}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button5} onPress={() => handleButtonPress('Asistente')}>
          <Image
            source={require('../../recursos/images/asistente.png')}
            style={styles.button2Image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
         
          <Animated.View style={floatingButtonStyle} {...panResponder.panHandlers}>
            <TouchableOpacity onPress={() =>  handleButtonPress('Noche')}>
                <Image
                  source={require('../../recursos/images/noche.png')}
                  style={styles.buttonNImage}
                  resizeMode="contain"
                />
            </TouchableOpacity>
          </Animated.View>
        


    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -80,
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button1: {
    width: 134,
    height: 134,
    backgroundColor: "#404040",
    borderRadius: 100,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#485E88',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  button2: {
    width: 134,
    height: 134,
    backgroundColor: "#404040",
    borderRadius: 100,
    marginLeft: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#485E88',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  button3: {
    width: 172,
    height: 172,
    backgroundColor: "#404040",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#485E88',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 10,
  },
  buttonRow2: {
    flexDirection: "row",
  },
  button4: {
    width: 134,
    height: 134,
    backgroundColor: "#404040",
    borderRadius: 100,
    marginRight: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#485E88',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  button5: {
    width: 134,
    height: 134,
    backgroundColor: "#404040",
    borderRadius: 100,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#485E88',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  button1Image: {
    width: 180,
    height: 180,
    borderRadius: 50,
  },
  button2Image: {
    width: 175,
    height: 175,
    borderRadius: 50,
  },
  button3Image: {
    width: 172,
    height: 172,
    borderRadius: 50,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0A1E32',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 50,
    shadowRadius: 30,
    elevation: 5,
  
  },
  buttonNImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginLeft: 11,
    marginRight: 13,
  },
  
});

export default Home;
