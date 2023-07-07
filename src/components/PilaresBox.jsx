import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';

const iconLibrary = {
  MaterialCommunityIcons: MaterialCommunityIcons,
  Ionicons: Ionicons,
  MaterialIcons: MaterialIcons,
  FontAwesome: FontAwesome
};

const PilaresBox = ({ text, iconLibrary, iconName, colour, title, size, color, phrase }) => {
  return (
    <View style={[styles.container, { backgroundColor: colour }]}>
      
      <View style={styles.titleContainer}>
        <View style={styles.logo}> 
                {iconLibrary === 'MaterialCommunityIcons' && (
                    <MaterialCommunityIcons name={iconName} size={size} color={color} /> 
                )}
                {iconLibrary === 'Ionicons' && (
                    <Ionicons name={iconName} size={size} color={color} /> 
                )}
                {iconLibrary === 'MaterialIcons' && (
                    <MaterialIcons name={iconName} size={size} color={color} /> 
                )}
                 {iconLibrary === 'FontAwesome' && (
                    <FontAwesome name={iconName} size={size} color={color} /> 
                )}
        </View>
        <View>
                <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <View style={styles.lineSeparator} />

      <Text style={styles.phrase}>{phrase}</Text>

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 600,
    marginVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 8,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', //separacion uniforme de contenedores 
  },

  title: {
    fontSize: 35,
    //fontWeight: 'bold',
    color: 'white',
    top: 0,
    left: 0,
    right: 0,
    textAlign: 'right',

  },

  lineSeparator: {
    width: '70%',
    height: 3,
    backgroundColor: 'white',
    marginTop: 80,
    marginLeft: 155,
    position: 'absolute',
    top: 40,
    left: -50,
    right: 0,
  },

  text: {
    width: '95%',
    fontSize: 16,
    //fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textAlign: 'justify',
    position: 'absolute',
    top: 200,
    left: 10,
    right: 10,
  },

  phrase: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    position: 'absolute',
    top: 120,
    left: 10,
    right: 0,
  },

  logo: {
    left: 15, 
  } 
});

export default PilaresBox;
