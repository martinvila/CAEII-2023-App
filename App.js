import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import * as Font from 'expo-font'
import  StackNavigation  from './src/context/StackNavigationContext'
//import Acreditacion from './src/screens/Acreditation.jsx'

function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  useEffect(() => {
    if(!fontsLoaded){
      loadFonts()
    }
  }, [])
  
  const loadFonts = async () => {
    await Font.loadAsync({
      'avenir-black': require('./recursos/fonts/Avenir-Black.ttf'),
      'avenir-medium': require('./recursos/fonts/Avenir-Medium.ttf')
    })
  
    setFontsLoaded(true)
  }

  if(!fontsLoaded){
    return(<View />)
  }

  return (
      <StackNavigation>

      </StackNavigation>

      
      //<Acreditacion />
  )
}
export default App;
