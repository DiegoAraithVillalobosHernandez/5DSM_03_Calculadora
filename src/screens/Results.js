import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../utils/colors';

export default function Results(props) {
	const { route } = props;
	console.log(props);
	return (
		<View style={styles.content}>
			{route.params.icm && (
				<View style={styles.results}>
					<Text style={styles.title}>Tus resultados</Text>
					<View style={styles.values}>
						<Text>
							Hola, {route.params.nombre.nombre} tienes {route.params.edad.edad} años, tu IMC es de 
							{route.params.icm} y clasificas como {route.params.clasificacion}
						</Text>
					</View>
				</View>
			)}

			{route.params.error && (
				<View style={styles.errorCard}>
					<Text style={styles.error}>Error</Text>
					<Text style={styles.errorM}>{route.params.error}</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	errorCard: {
		backgroundColor: colors.BACKGROUND_ERROR,
		borderRadius: 30,
		padding: 20
	},
	error: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 25,
		width: '100%',
		backgroundColor: colors.ERROR_M,
		borderRadius: 30,
		padding: 10
	},
	errorM: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 25,
		paddingTop: 20
	},
	results: {
		backgroundColor: colors.BACKGROUND_SUCCESS,
		borderRadius: 30,
		padding: 30
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
		backgroundColor: colors.SUCCESS_M,
		borderRadius: 30,
		padding: 10
	},
	content: {
		marginTop: 10,
		marginHorizontal: 40
	},
	values: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20
	}
});
