import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, StyleSheet, Image, ScrollView , Text} from 'react-native';

const Cronograma = () => {
  const [selected, setSelected] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [content, setContent] = useState(null);

  const data = [
    { key: '1', value: 'Día Cero' },
    { key: '2', value: 'Día Jueves' },
    { key: '3', value: 'Día Viernes' },
    { key: '4', value: 'Día Sábado' },
    { key: '5', value: 'Día Domingo' },
  ];

  const handleSelect = (value) => {
    setSelected(value);

    // Realizar la acción correspondiente según el valor seleccionado
    const action = actions[value];
    if (action) {
      action();
    }
  };

  const actions = {
    'Día Cero': () => {
      setShowInfo(true);
      setContent(<Text style={styles.customText}>¡Dia Cero!</Text>);
      
    },
    'Día Jueves': () => {
      setShowInfo(true);
      setContent(<Text style={styles.customText}>¡Dia cero!</Text>);
    },
    'Día Viernes': () => {
      setShowInfo(true);
      //setContent(<Image style={styles.image} source={require('../../../recursos/images/viernes.png')} />);
      setContent(<Text style={styles.customText}>¡Dia Viernes!</Text>);
    },
    'Día Sábado': () => {
      setShowInfo(true);
      //setContent(<Image style={styles.image} source={require('../../../recursos/images/Sabado.png')} />);
    },
    'Día Domingo': () => {
      setShowInfo(true);
      //setContent(<Image style={styles.image} source={require('../../../recursos/images/Domingo.png')} />);
    },
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 50 }}>
        <SelectList
          setSelected={handleSelect}
          data={data}
          save="value"
          boxStyles={{
            backgroundColor: "#13839C",
            borderColor: "#485E88",
            paddingHorizontal: 80
          }}
          dropdownStyles={{
            backgroundColor: "#13839C",
            borderColor: "white",
            paddingHorizontal: 3,
            color: "white",
          }}
          dropdownTextStyles={{ color: "white" }}
          placeholder='Seleccione día'
        />
      </View>
      {showInfo && (
        <ScrollView style={styles.infoContainer}>
          {content}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: -10,
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
  customText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
 image: {
    width: '100%',
    height: 600,  // Ajusta la altura de la imagen según tus necesidades
  },
});

export default Cronograma;
