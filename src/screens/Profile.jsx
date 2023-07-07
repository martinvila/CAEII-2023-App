import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ExitButton } from '../components/ExitButton';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
              <MaterialCommunityIcons name="account-circle" size={200} color= '#404040' />
          <View>
              <Text style={{color: '#404040', fontSize: 30, marginBottom:25, fontWeight:"bold"}}>Juan Cruz Concepción</Text>
          </View>
        </View>
        
        <Text style={{color: '#404040', fontSize:24, marginBottom:25, fontWeight:"bold"}}> Datos Personales</Text>
        
        <View >   
            <View style={styles.infoContainer}>
              <Text style={{color: '#404040', fontSize:16}}> Ciudad</Text>
          
              <Text style={{color: '#404040', fontSize:18, fontWeight:"semibold"}}> Mar del Plata, ARG</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{color: '#404040', fontSize:16}}> Carrera</Text>
              <Text style={{color: '#404040', fontSize:18, fontWeight:"semibold"}}> Ing. Electronica</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{color: '#404040', fontSize:16}}> Email</Text>
              <Text style={{color: '#404040', fontWeight:"semibold", fontSize:18}}> ASDASDsd@juanconcep0770</Text>
            </View>         
        </View>
      </View>
      <ExitButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  
  },
  textNameContainer:{
    
  }, 
  infoContainer: {
    
    marginBottom:20
  },
  textoDatosPersonales:{
    fontSize:24,
    color:"#f404040",
  },
  textos:{
   color:"#f404040",
  } 
});

export default Perfil;



