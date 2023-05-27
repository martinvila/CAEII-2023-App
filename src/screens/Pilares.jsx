import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons, AntDesign , Ionicons, FontAwesome, Feather} from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';

const Pilares = () => {
  return (
    <View style={styles.container}>
            <View style={styles.pilar1}>
                <MaterialIcons name="computer" size={24} color="black" />
            </View>
        
            <View style={styles.pilar2}>
                <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="black" />
            </View>

            <View style={styles.pilar3}>
                <FontAwesome name="recycle" size={24} color="black" />
            </View>

            <View style={styles.pilar4}>
                <MaterialCommunityIcons name="axis-y-rotate-clockwise" size={24} color="black" />
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#101010',
}, 

  pilar1: {
    width: '90%',
    height: 100,
    backgroundColor: "#13839C",
    marginVertical: 10,
    borderRadius: 10,
  },

  pilar2: {
    width: '90%',
    height: 100,
    backgroundColor: "#485E88",
    marginVertical: 10,
    borderRadius: 10,
  },

  pilar3: {
    width: '90%',
    height: 100,
    backgroundColor: "#B03723",
    marginVertical: 10,
    borderRadius: 10,
  },

  pilar4: {
    width: '90%',
    height: 100,
    backgroundColor: "#C95727",
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default Pilares;


