import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <AntDesign name="user" size={200} color="black" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Juan Cruz</Text>
        <Text style={styles.description}>Estudiante</Text>
        <Text style={styles.location}>Mar del Plata, ARG</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    backgroundColor: '#d9d9d9',
    borderRadius: 10, 
    paddingHorizontal: 10, // Ajusta el padding horizontal según tus necesidades
    paddingVertical: 10, // Ajusta el padding vertical según tus necesidades
  }, 
  location: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    backgroundColor: '#d9d9d9',
    borderRadius: 10, 
    paddingHorizontal: 10, // Ajusta el padding horizontal según tus necesidades
    paddingVertical: 10, 
  },
});

export default ProfileScreen;
