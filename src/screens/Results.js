import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../src/utils/colors'

export default function Results(props) {
    const {errorM, total, capital, interes, meses} = props
    console.log({errorM})
    return (
        <View style={styles.content}>
            {total &&(
                <View style={styles.results}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <View style={styles.values}>
                        <Text>Cantidad solicitada</Text>
                        <Text>{capital}</Text>
                    </View>
                </View>
            )}
            <View>
                <Text style={styles.errorM}>{errorM}</Text>
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