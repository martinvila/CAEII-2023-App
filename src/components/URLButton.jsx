import React from 'react'
import { Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'


const URLButton = ({url, children}) => {
    const handlePress = async () => {
        await Linking.openURL(url)
    }
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.links}>{children}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
links: {
    color: '#F5F5F5',
    fontFamily: 'avenir-black'
  }
})


export default URLButton