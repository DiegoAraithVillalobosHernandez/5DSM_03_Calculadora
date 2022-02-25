import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Index from '../screens/Index';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import Results from '../screens/Results';
import colors from '../utils/colors';

const Stack = createStackNavigator();

export default function IndexStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="index"
					component={Index}
					options={{
						title: 'Inicio',
						headerLeft: () => <Icon 
            type="material-community" 
            name="home" size={29} 
            color={'white'} 
            style={{marginLeft: 20}} />,
						headerStyle: {
							backgroundColor: colors.HEADHER,
              paddingHorizontal: 100 
						},
						headerTitleStyle: {
							color: 'white'
						}
					}}
				/>
				<Stack.Screen
					name="results"
					component={Results}
					options={({ navigation }) => ({
						title: 'ICM',
            
						headerStyle: {
							backgroundColor: colors.HEADHER
						},
						headerTitleStyle: {
							color: 'white',
							headerTintColor: '#ffffff'
						},
						headerLeft: () => <Icon 
            type="material-community" 
            name="arrow-left" 
            size={29} 
            color={'white'} 
            onPress={() => {navigation.navigate('index')}}
            style={{marginLeft: 20}}/>,

					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
