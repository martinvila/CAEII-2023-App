import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import URLButton from '../components/URLButton.jsx'

const Nosotros = () => {

  return (
    <ScrollView> 
        <View style={styles.container}>
            <View>  
                <Text style={{...styles.title, textAlign: 'center' }}>¿Quienes somos?</Text>
            
                <Text style={styles.text}>
                    El Congreso Argentino de Estudiantes de Ingeniería Industrial y 
                    carreras afines (CAEII) es el evento más importante de AArEII. 
                    Tiene una duración de cuatro días, donde se disfrutan y aprovechan 
                    diversas actividades académicas. El mismo tiene lugar en el mes de 
                    agosto de cada año y cuenta con una asistencia de 1500 estudiantes 
                    aproximadamente.
                    El Congreso Argentino de Estudiantes de Ingeniería Industrial y 
                    carreras afines (CAEII) es el evento más importante de AArEII. 
                    Tiene una duración de cuatro días, donde se disfrutan y aprovechan 
                    diversas actividades académicas. El mismo tiene lugar en el mes de 
                    agosto de cada año y cuenta con una asistencia de 1500 estudiantes 
                    aproximadamente.
                    El Congreso Argentino de Estudiantes de Ingeniería Industrial y 
                    carreras afines (CAEII) es el evento más importante de AArEII. 
                    Tiene una duración de cuatro días, donde se disfrutan y aprovechan 
                    diversas actividades académicas. El mismo tiene lugar en el mes de 
                    agosto de cada año y cuenta con una asistencia de 1500 estudiantes 
                    aproximadamente.
                </Text>
            </View> 
            <View>  
                <Text style={{...styles.title, fontSize: 30 }}>Contacto </Text>
                
                <View style={styles.logo}>
                    <FontAwesome name="instagram" size={35} color="black"  />
                
                    <URLButton url={"https://www.instagram.com/caeii_oficial/"} size={20}>
                        @caeii_oficial 
                    </URLButton>
                </View> 
            </View>  
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 40,
    fontFamily: 'avenir-black'
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'avenir-medium',
  },
  logo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 160,
    alignItems: 'center',
  },
});

export default Nosotros;