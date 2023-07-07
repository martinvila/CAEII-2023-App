
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PilaresBox from '../components/PilaresBox';

const Pilares = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <PilaresBox
        const title={`EL COSTO${'\n'} DE LAS IDEAS`}
        iconLibrary="MaterialCommunityIcons"
        iconName="lightbulb-on-outline"
        size= {70}
        color= "white"
        colour="#13839C"
        phrase= "Lo que haces y dejas de hacer tiene un impacto directo en tu vida"
        text="¡Descubre la complejidad de la realidad y cómo tomar decisiones en tu vida! 
              Explora el concepto del costo de oportunidad y descubre el precio que pagas 
              al elegir una opción sobre otra. A través de esta experiencia interactiva, 
              comprenderás tu estado presente y aprenderás a planificar un futuro exitoso. 
              ¿Sabías que los ingenieros tienen un proceso de razonamiento único? Descubre 
              cómo influye en nuestras elecciones y pensamientos. Recuerda que somos seres 
              sociales y nuestra vida se desenvuelve en organizaciones llenas de emociones, 
              pensamientos, decisiones y acciones individuales. No estás solo en este viaje, 
              hay innumerables expertos que te guiarán para que escribas tu propio futuro."
      />
    
      <PilaresBox
        title= {`REVOLUCIONES${'\n'} Y TECNOLOGÍA`}
        iconLibrary="MaterialIcons"
        iconName="computer"
        color= "white"
        colour="#485E88"
        size= {70}
        phrase= "Lo que haces y dejas de hacer tiene un impacto directo en tu vida"
        text="¡Descubre la complejidad de la realidad y cómo tomar decisiones en tu vida! 
              Explora el concepto del costo de oportunidad y descubre el precio que pagas 
              al elegir una opción sobre otra. A través de esta experiencia interactiva, 
              comprenderás tu estado presente y aprenderás a planificar un futuro exitoso. 
              ¿Sabías que los ingenieros tienen un proceso de razonamiento único? Descubre 
              cómo influye en nuestras elecciones y pensamientos. Recuerda que somos seres 
              sociales y nuestra vida se desenvuelve en organizaciones llenas de emociones, 
              pensamientos, decisiones y acciones individuales. No estás solo en este viaje, 
              hay innumerables expertos que te guiarán para que escribas tu propio futuro."
      />

      <PilaresBox
        title="IMPACTEMOS POSITIVAMENTE"
        iconLibrary="FontAwesome"
        iconName="recycle"
        color= "white"
        colour="#B03723"
        size= {70}
        phrase= "Lo que haces y dejas de hacer tiene un impacto directo en tu vida"
        text="¡Descubre la complejidad de la realidad y cómo tomar decisiones en tu vida! 
              Explora el concepto del costo de oportunidad y descubre el precio que pagas 
              al elegir una opción sobre otra. A través de esta experiencia interactiva, 
              comprenderás tu estado presente y aprenderás a planificar un futuro exitoso. 
              ¿Sabías que los ingenieros tienen un proceso de razonamiento único? Descubre 
              cómo influye en nuestras elecciones y pensamientos. Recuerda que somos seres 
              sociales y nuestra vida se desenvuelve en organizaciones llenas de emociones, 
              pensamientos, decisiones y acciones individuales. No estás solo en este viaje, 
              hay innumerables expertos que te guiarán para que escribas tu propio futuro."
      />

      <PilaresBox
        title={`INNOVACIÓN${'\n'} Y FUTURO`}
        iconLibrary="MaterialCommunityIcons"
        iconName="chart-timeline-variant-shimmer"
        size= {70}
        color= "white"
        colour="#C95727"
        phrase= "Lo que haces y dejas de hacer tiene un impacto directo en tu vida"
        text="¡Descubre la complejidad de la realidad y cómo tomar decisiones en tu vida! 
              Explora el concepto del costo de oportunidad y descubre el precio que pagas 
              al elegir una opción sobre otra. A través de esta experiencia interactiva, 
              comprenderás tu estado presente y aprenderás a planificar un futuro exitoso. 
              ¿Sabías que los ingenieros tienen un proceso de razonamiento único? Descubre 
              cómo influye en nuestras elecciones y pensamientos. Recuerda que somos seres 
              sociales y nuestra vida se desenvuelve en organizaciones llenas de emociones, 
              pensamientos, decisiones y acciones individuales. No estás solo en este viaje, 
              hay innumerables expertos que te guiarán para que escribas tu propio futuro."
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flexGrow: 1,
    //justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f7f6f6',
  },
});

export default Pilares;
