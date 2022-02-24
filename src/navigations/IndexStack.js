import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/Index";
import { Icon } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import Results from "../screens/Results"

const Stack = createStackNavigator();

export default function IndexStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={Index}
          options={{ 
            title: "Inicio",
            headerLeft:( () => 
              <Icon
                onPress={() => navigation.openDrawer()} 
                type="material-community" 
                name="home" 
                size={29} 
                color={"black"} 
                />
            )
          }}
        />
        <Stack.Screen
          name="results"
          component={Results}
          options={{ 
            title: "Resultado ICM",
            headerLeft:( () => 
              <Icon
                onPress={() => navigation.openDrawer()} 
                type="material-community" 
                name="weight-lifter" 
                size={29} 
                color={"black"} 
                />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}