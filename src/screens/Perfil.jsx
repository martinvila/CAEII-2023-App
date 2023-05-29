import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <MaterialCommunityIcons name="account-circle" size={200} color= 'white' />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>Juan Cruz Concepción</Text>
        <Text style={styles.ciudad}>Mar del Plata, ARG</Text>
        
        <Text style={styles.carrera}>Ing. Electronica</Text>
        <Text style={styles.instagram}>@juanconcep0770</Text>
      </View>

      <View style={styles.underContainer}>
          <View style={styles.under}>
            <Ionicons name="qr-code-outline" size={300} color="white" />
          </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  underContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  under: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#13839C',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: 330, 
    height: 330, 
  },
  profileImage: {
    width: 100,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    paddingHorizontal: 50,
    marginTop: -10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  ciudad: {
    fontSize: 16,
    marginBottom: 2,
    textAlign: 'center',
    backgroundColor: '#13839C',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'white',
  }, 
  carrera: {
    fontSize: 16,
    marginBottom: 2,
    textAlign: 'center',
    backgroundColor: '#13839C',
    //borderRadius: 5, 
    paddingHorizontal: 10, 
    paddingVertical: 10, 
    color: 'white',
  },
  instagram: {
    fontSize: 16,
    marginBottom: 2,
    textAlign: 'center',
    backgroundColor: '#13839C',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 10, 
    paddingVertical: 10, 
    color: 'white',
  },
  
});

export default Perfil;



