import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Button } from 'react-native';
import Form from '../../components/Form';
import colors from '../utils/colors';
export default function Index(props) {
	const { navigation } = props;
	//useStateSnippet
	const [ nombre, setNombre ] = useState(null);
	const [ edad, setEdad ] = useState(null);
	const [ peso, setPeso ] = useState(null);
	const [ altura, setAltura ] = useState(null);

	const navigate = () => {
		const { error, icm, clasificacion } = calcular();
		navigation.navigate('results', {
			error: error,
			icm: icm,
			edad: { edad },
			nombre: { nombre },
      		clasificacion: clasificacion
		});
	};

	const calcular = () => {
		if (!nombre || !edad || !peso || !altura) {
			return { error: 'Hay campos vacíos', icm: null, clasificacion: null };
		} else {
			const total = peso / Math.pow(altura, 2);
			let clasificacion = null;
			if (total <= 18) {
				clasificacion = "Peso bajo"
			} else  if (total < 25){
				clasificacion = "Normal"
			} else  if (total < 30){
				clasificacion = "Sobre peso"
			} else  if (total < 35){
				clasificacion = "Sobre peso I"
			}else  if (total < 40){
				clasificacion = "Sobre peso II"
			}else{
				clasificacion = "Riesgoso"
			}
			return { error: null, icm: total.toFixed(2), clasificacion: clasificacion };
		}
	};

	return (
		<View style={styles.app}>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.subbackground} />
				<Text style={styles.titleApp}>Calculadora IMC</Text>
				<Form setNombre={setNombre} setEdad={setEdad} setPeso={setPeso} setAltura={setAltura} />
			</SafeAreaView>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.buttonCal} onPress={navigate}>
					<Text style={styles.calculate}>Calcular</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		width: '100%',
		height: '100%',
		backgroundColor: colors.BACKGROUND
	},
	safeArea: {
		height: '50%',
		alignItems: 'center'
	},
	titleApp: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#fff',
		marginTop: 15,
		marginBottom: 30
	},
	subbackground: {
		backgroundColor: colors.S_COLOR,
		height: 200,
		width: '100%',
		borderBottomEndRadius: 30,
		borderBottomLeftRadius: 30,
		position: 'absolute',
		zIndex: -1
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: colors.HEADHER,
		height: 40,
		borderTopLeftRadius: 60,
		borderTopRightRadius: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonCal: {
		backgroundColor: colors.S_COLOR,
		padding: 16,
		borderTopStartRadius: 30,
		borderTopEndRadius: 30,
		width: '75%',
    marginBottom:40,
    height:60
	},
	calculate: {
		fontWeight: 'bold',
		fontSize: 18,
		color: "#fff",
		textAlign: 'center'
	}
});
