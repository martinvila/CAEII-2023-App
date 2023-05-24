import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const InitScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Contenido del encabezado */}
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Contenido de la pantalla */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010", // Cambia el color de fondo aquí
  },
  contentContainer: {
    // Estilos para el contenido de la pantalla
  },
});

export default InitScreen;
