// import React from 'react';
// import { View } from 'react-native';
// import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


// const Cronograma = () => {
//     return (
//       <View style={{ flex: 1 }}>
//         <Calendar
        
//         markedDates={{
//           '2023-05-05': { marked: true, dotColor: '#FF0000' },
//           '2023-05-15': { marked: true, dotColor: '#00FF00' },
//           // Aca marco los dias que quiero 
//         }}
//         />
//           {/* // Configuración del calendario
//           // Puedes personalizarlo según tus necesidades */}
//         {/* Otros componentes relacionados con el cronograma */}
//       </View>
//     );
//   };

//   export default Cronograma;
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Cronograma = () => {
  const [selected, setSelected] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const data = [
    { key: '1', value: 'Día Cero' },
    { key: '2', value: 'Día Jueves' },
    { key: '3', value: 'Día Viernes' },
    { key: '4', value: 'Día Sábado' },
    { key: '5', value: 'Día Domingo' },
  ];

  const actions = {
    'Día Cero': () => {
      setShowInfo(true);
      // Acción para el botón 'Día Cero'
    },
    'Día Jueves': () => {
      setShowInfo(true);
      // Acción para el botón 'Día Jueves'
    },
    'Día Viernes': () => {
      setShowInfo(true);
      // Acción para el botón 'Día Viernes'
    },
    'Día Sábado': () => {
      setShowInfo(true);
      // Acción para el botón 'Día Sábado'
    },
    'Día Domingo': () => {
      setShowInfo(true);
      // Acción para el botón 'Día Domingo'
    },
  };

  const handleSelect = (value) => {
    setSelected(value);

    // Realizar la acción correspondiente según el valor seleccionado
    const action = actions[value];
    if (action) {
      action();
    }
  };

  return (
     <View style={styles.container}>
          <View style={{paddingHorizontal: 20, paddingVertical:50 }}>
          <SelectList
            setSelected={setSelected}
            data={data}
            save="value"
            optionStyle={optionStyle}
            menuStyle={menuStyle}
            boxStyles={{backgroundColor:"white" , borderColor:"#485E88", paddingHorizontal: 80}}
            dropdownStyles={{backgroundColor:"white", borderColor:"white", paddingHorizontal:3}}
            placeholder='Seleccione día' 
            
          />
          </View>
          {showInfo && selected === 'Día Cero' && (
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Este es el día cero</Text>
            </View>
          )}

          {showInfo && selected === 'Día Jueves' && (
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Este es el día jueves</Text>
            </View>
          )}
          
    </View>
  )
};

export default Cronograma;



const optionStyle = {
    // Estilos para las opciones
    backgroundColor: 'black',
    padding: 10,
  };


  const menuStyle = {
    // Estilos para el menú
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 15,
    margin: 10,
  };


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#101010',
      paddingTop: -10,
  },
  additionalInfo: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },

  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});