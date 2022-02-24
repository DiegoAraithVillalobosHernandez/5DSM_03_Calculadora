import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Results(props) {
    const {route} = props
    console.log(props)
    return (
        <View style={styles.content}>
            {icm &&(
                <View style={styles.results}>
                    <Text style={styles.title}>Cálculos</Text>
                    <View style={styles.values}>
                        <Text>Hola, {route.params.nombre} tienes {route.params.edad} años y tu IMC es: {route.params.icm} </Text>
                    </View>
                </View>
            )}
            <View>
                <Text style={styles.errorM}>{route.params.error}</Text>
            </View>

        </View>
    )
  
}

const styles = StyleSheet.create({
    errorM:{
        textAlign:"center",
        color:"red",
        fontWeight:"bold",
        fontSize:25,
        
    },
    results:{
        padding:30,
    },
    title:{
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
        color: "#fff",
        marginBottom: 20
    },
    content:{
        marginTop:10,
        marginHorizontal:40,
    },
    values:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    }
})