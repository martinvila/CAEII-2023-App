import React from "react";
import { StyleSheet, Image, Dimensions, Text, View, ScrollView ,TouchableOpacity} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from 'react-native-swiper';



const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const Inscripciones = () => {

  const handleButtonPress = (inscriptionId) => {
    // ahora me muestra en consola el numero de la inscripcion, despues hay que agregar api
    console.log(`Realizando inscripción para ID: ${inscriptionId}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView> 
          
          {/* CONFERENCIAS */}
          <Text style={styles.slideText}>Conferencias</Text>
          <Swiper 
          dotColor="#485E88" // Cambia el color de los puntos de navegación
          activeDotColor="#13839C" // Cambia el color del punto activo
          >
            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_1.jpg")} style={styles.img} />
              <Text style={styles.title}>Conferencia 1</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_2.jpg")} style={styles.img} />
              <Text style={styles.title}>Conferencia 2</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_3.jpg")} style={styles.img} />
              <Text style={styles.title}>Conferencia 3</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_4.jpg")} style={styles.img} />
              <Text style={styles.title}>Conferencia 4</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(4)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
            </TouchableOpacity>
            </View>
          </Swiper>

          {/* VISITAS TECNICAS */}
          <Text style={styles.slideText}>Visitas Técnicas</Text>
          <Swiper 
          dotColor="#485E88" // Cambia el color de los puntos de navegación
          activeDotColor="#13839C" // Cambia el color del punto activo
          >
            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_1.jpg")} style={styles.img} />
              <Text style={styles.title}>Visita 1</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(5)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_2.jpg")} style={styles.img} />
              <Text style={styles.title}>Visita 2</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(6)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_3.jpg")} style={styles.img} />
              <Text style={styles.title}>Visita 3</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(7)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_4.jpg")} style={styles.img} />
              <Text style={styles.title}>Visita 4</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(8)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
          </Swiper>
          
          {/* TALLERES */}
          <Text style={styles.slideText}>Talleres</Text>
          <Swiper 
          dotColor="#485E88" // Cambia el color de los puntos de navegación
          activeDotColor="#13839C" // Cambia el color del punto activo
          >
            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_1.jpg")} style={styles.img} />
              <Text style={styles.title}>Taller 1</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(9)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_2.jpg")} style={styles.img} />
              <Text style={styles.title}>Taller 2</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(10)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_3.jpg")} style={styles.img} />
              <Text style={styles.title}>Taller 3</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(11)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.slide}>
              <Image source={require("../../recursos/images/Verano_4.jpg")} style={styles.img} />
              <Text style={styles.title}>Taller 4</Text>
              <Text style={styles.text}>
                Marcos describe como fueron sus pasos en esta industria 
                fascinante, comenzando desde que era un niño que soñaba
                con ser astronauta, hasta el día de hoy donde ya cuenta
                con la experiencia de haber formado parte la Nasa.
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(12)}>
                <Text style={styles.buttonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
          </Swiper>


      </ScrollView>
    </View>
  );
  
};


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400, // Ajusta el ancho máximo del slide
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    },

    slideText: {
      marginTop: 5,
      marginHorizontal: 20,
      marginBottom: -40,
      fontSize: 40,
      color: "white", 
      fontWeight: 'bold',
    },

    container: {
      flex: 1, 
      backgroundColor: "#101010",
    },

    img: {
      alignSelf: "center",
      borderTopRightRadius: 80,
      borderBottomLeftRadius: 80,
      height: h * 0.5,
      width: w * 0.9,
    },

    title: {
      //fontFamily: "Montserrat_700Bold",
      marginTop: 20,
      marginHorizontal: 10,
      fontSize: 32,
      color: "white", 
      fontWeight: 'bold',
    },

    text: {
      color: 'white',
      //fontFamily: "Montserrat_400Regular",
      marginTop: 10,
      fontSize: 16,
      lineHeight: 25,
      marginLeft: 10,
      textAlign: 'justify',
      
    },

    button: {
      backgroundColor: "#13839c",
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 90,
      justifyContent: 'center',
      alignItems: 'center', 
    },

    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
       
    },


    
  });


 export default Inscripciones;