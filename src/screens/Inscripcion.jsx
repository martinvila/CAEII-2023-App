import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";


const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const InscripcionScreen = () => {
  
  return (
      <Swiper>
        <View style={styles.slide}>
          <Image source={require("../../recursos/images/Verano_1")} style={styles.img} />
          <Text style={styles.title}>Conferencia 1</Text>
          <Text style={styles.text}>
            Marcos describe como fueron sus pasos en esta industria 
            fascinante, comenzando desde que era un niño que soñaba
            con ser astronauta, hasta el día de hoy donde ya cuenta
            con la experiencia de haber formado parte la Nasa.
          </Text>
        </View>

        <View style={styles.slide}>
          <Image source={require("../../recursos/images/Verano_2")} style={styles.img} />
          <Text style={styles.title}>Conferencia 2</Text>
          <Text style={styles.text}>
          Marcos describe como fueron sus pasos en esta industria 
            fascinante, comenzando desde que era un niño que soñaba
            con ser astronauta, hasta el día de hoy donde ya cuenta
            con la experiencia de haber formado parte la Nasa.
          </Text>
        </View>

        <View style={styles.slide}>
          <Image source={require("../../recursos/images/Verano_3")} style={styles.img} />
          <Text style={styles.title}>Conferencia 3</Text>
          <Text style={styles.text}>
          Marcos describe como fueron sus pasos en esta industria 
            fascinante, comenzando desde que era un niño que soñaba
            con ser astronauta, hasta el día de hoy donde ya cuenta
            con la experiencia de haber formado parte la Nasa.
          </Text>
        </View>
        
        <View style={styles.slide}>
          <Image source={require("../../recursos/images/Verano_4")} style={styles.img} />
          <Text style={styles.title}>Conferencia 4</Text>
          <Text style={styles.text}>
          Marcos describe como fueron sus pasos en esta industria 
            fascinante, comenzando desde que era un niño que soñaba
            con ser astronauta, hasta el día de hoy donde ya cuenta
            con la experiencia de haber formado parte la Nasa.
          </Text>
        </View>
      </Swiper>
  );
  
};

export default InscripcionScreen;

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      paddingTop: 60,
      marginHorizontal: 30,
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
    },
    text: {
      color: "#767676",
      //fontFamily: "Montserrat_400Regular",
      marginTop: 10,
      fontSize: 16,
      lineHeight: 25,
      marginLeft: 10,
    },
  });