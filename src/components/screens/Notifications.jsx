import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Dimensions ,Image} from 'react-native';


const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;


const Slide = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.slide}>
      <Image source={require("../../../recursos/images/Verano_1.jpg")} style={styles.img} />
      <Text style={styles.title}>Conferencia 2</Text>
      <TouchableOpacity onPress={toggleExpanded}>
        <Text style={styles.text}>
          {expanded
            ? 'Marcos describe como fueron sus pasos en esta industria fascinante, comenzando desde que era un niño que soñaba con ser astronauta, hasta el día de hoy donde ya cuenta con la experiencia de haber formado parte la Nasa.'
            : 'Marcos describe como fueron sus pasos en esta industria fascinante...'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default Slide;

