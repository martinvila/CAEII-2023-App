import React from "react"
import { StyleSheet, View, TouchableOpacity, Text, Image} from "react-native"
import { HomeButton, NightButton } from '../components/HomeButton'

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
				text={`Manual de${'\n'}  asistente`}
				size={45}
				colour= "#ffffff"
				onPress={() => navigation.navigate('Asistente')} 
				/> 
			</View>
			
			<View style={styles.buttonNight}>
				<NightButton
				iconLibrary="MaterialIcons"
				iconName="local-bar"
				size={35}
				colour= "#ffde77"
				onPress={() => navigation.navigate('Noche')}
				/>				 
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#f7f6f6',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: '25%',
    width: '75%',
  },
  buttonRow: {
    flexDirection: 'row',
    padding: 15,
  },
  buttonNight: {
	width: '90%',
	height: '18%',
	justifyContent: 'flex-end',
	alignItems: 'flex-end',
    padding: 10,
  },
})

export default Home