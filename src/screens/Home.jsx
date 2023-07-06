import React from "react"
import { StyleSheet, View, TouchableOpacity, Text, Image} from "react-native"
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import HomeButton from '../components/HomeButton'

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../../recursos/images/logoCAEII.png')}/>

			<View style={styles.buttonRow}>
				<HomeButton
				iconLibrary="MaterialCommunityIcons"
				iconName="calendar-text"
				text="Cronograma"
				size={45}
				colour= "#ffffff"
				onPress={() => navigation.navigate('Cronograma')} 
				/> 

				<HomeButton
				iconLibrary="MaterialCommunityIcons"
				iconName="electron-framework"
				text="Pilares"
				size={45}
				colour= "#ffffff"
				onPress={() => navigation.navigate('Pilares')} 
				/> 
			</View>

				<HomeButton
				iconLibrary="MaterialCommunityIcons"
				iconName="lighthouse"
				text=""
				size={90}
				colour= "#ffffff"
				onPress={() => navigation.navigate('Informacion')}
				/> 
			
			<View style={styles.buttonRow}>
				<HomeButton
				iconLibrary="Ionicons"
				iconName="people"
				text="Nosotros"
				size={45}
				colour= "#ffffff"
				onPress={() => navigation.navigate('Nosotros')} 
				/> 

				<HomeButton
				iconLibrary="Ionicons"
				iconName="map-outline"
				text="Asistente"
				size={45}
				colour= "#ffffff"
				onPress={() => navigation.navigate('Asistente')} 
				/> 
			</View>

				{/* <Animated.View style={floatingButtonStyle} {...panResponder.panHandlers}>
					<TouchableOpacity onPress={() =>  handleButtonPress('Noche')}>
						<Image
						source={require('../../../recursos/images/noche.png')}
						style={styles.buttonNImage}
						resizeMode="contain"
						/>
					</TouchableOpacity>
				</Animated.View> */}
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: "#f7f6f6",
    alignItems: "center",
  },
  logo: {
    resizeMode: 'contain',
    height: '25%',
    width: '75%',
	marginTop: 10
  },
  buttonRow: {
    flexDirection: "row",
    padding: 15,
  },

//   buttonImage: {
//     width: 180,
//     height: 180,
//     borderRadius: 50,
//   },
//   floatingButton: {
//     position: 'absolute',
//     bottom: 16,
//     right: 16,
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     backgroundColor: '#0A1E32',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: 'white',
//     shadowOffset: {
//       width: 5,
//       height: 5,
//     },
//     shadowOpacity: 50,
//     shadowRadius: 30,
//     elevation: 5,
//   },
//   buttonNImage: {
//     width: 90,
//     height: 90,
//     borderRadius: 50,
//     marginLeft: 11,
//     marginRight: 13,
//   },
})

export default Home