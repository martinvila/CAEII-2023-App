import React from 'react'
import { Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'


const URLButton = ({url, size, children}) => {
    const handlePress = async () => {
        await Linking.openURL(url)
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={{...styles.links, fontSize: size}}>{children}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
links: {
    color: '#404040',
    fontFamily: 'avenir-black', 
  }
})


export default URLButton