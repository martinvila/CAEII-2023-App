import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login.jsx'
import Splash from './src/screens/Splash.jsx'
import { DrawerNavigation } from './src/screens/DrawerNavigation.jsx';

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false)
  
  useEffect(() => {
    async function inicia(){
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 5000)
        })
      }
      catch (error) {
        console.log(error)
      }
      finally {
        setAppIsReady(true)
      }
    }
  
    inicia()
  })

  return (
    <NavigationContainer style={styles.container}>
      {/* {appIsReady ? <Login /> : <Splash />} */}
      <StatusBar style="light" />
      <DrawerNavigation /> 
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1   
  }
});
