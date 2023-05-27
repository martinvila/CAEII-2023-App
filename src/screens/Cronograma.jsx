import React from 'react';
import { View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const Cronograma = () => {
    return (
      <View style={{ flex: 1 }}>
        <Calendar
        
        markedDates={{
          '2023-05-05': { marked: true, dotColor: '#FF0000' },
          '2023-05-15': { marked: true, dotColor: '#00FF00' },
          // Aca marco los dias que quiero 
        }}
        />
          {/* // Configuración del calendario
          // Puedes personalizarlo según tus necesidades */}
        {/* Otros componentes relacionados con el cronograma */}
      </View>
    );
  };

  export default Cronograma;