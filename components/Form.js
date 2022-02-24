// snippet rnfs
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function form(props) {
  const {setNombre, setEdad, setPeso, setAltura} = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
          <TextInput placeholder='Nombre' 
          style={styles.input}
          onChange={(e)=>setNombre(e.nativeEvent.text)}
          />
          <TextInput placeholder='Edad' 
          keyboardType='numeric' 
          style={styles.input}
          onChange={(e)=>setEdad(e.nativeEvent.text)}
          />
          <TextInput placeholder='Peso' 
          keyboardType='numeric' 
          style={styles.input}
          onChange={(e)=>setPeso(e.nativeEvent.text)}
          />
          <TextInput placeholder='Altura' 
          keyboardType='numeric' 
          style={[styles.input]}
          onChange={(e)=>setAltura(e.nativeEvent.text)}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    viewForm:{
        bottom: 0,
        width: "85%",
        height: "100%",
        paddingHorizontal: 50,
        backgroundColor: '#fa5579',
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
        justifyContent: "center",
        marginBottom:10
    },
    viewInput:{
        flexDirection: "column",
    },
    input:{
        height: 50,
        backgroundColor:"#fff" ,
        borderWidth:1,
        borderColor:'#fa5579',
        color: '#b0203f',
        borderRadius: 5,
        width:"100%",
        marginRight: 5,
        marginLeft:-5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20
    }
    
});

