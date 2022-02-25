// snippet rnfs
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import colors from '../src/utils/colors';

export default function form(props) {
  const {setNombre, setEdad, setPeso, setAltura} = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInCol}>
          <TextInput placeholder='Nombre' 
          style={styles.inputLarge}
          onChange={(e)=>setNombre(e.nativeEvent.text)}
          />
          <TextInput placeholder='Edad' 
          keyboardType='numeric' 
          style={styles.inputLarge}
          onChange={(e)=>setEdad(e.nativeEvent.text)}
          />
          <View style={styles.viewInRow}>
          <TextInput placeholder='Peso' 
          keyboardType='numeric' 
          style={styles.inputShort}
          onChange={(e)=>setPeso(e.nativeEvent.text)}
          />
          <TextInput placeholder='Altura' 
          keyboardType='numeric' 
          style={[styles.inputShort]}
          onChange={(e)=>setAltura(e.nativeEvent.text)}
          />
          </View>
          
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
        backgroundColor: colors.P_COLOR,
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
        justifyContent: "center",
        marginBottom:10
    },
    viewInCol:{
        flexDirection: "column",
    },
    viewInRow:{
      flexDirection: "row",
      justifyContent: "space-between",
    },
    inputLarge:{
        height: 50,
        backgroundColor:"#fff" ,
        borderWidth:1,
        borderColor:colors.HEADHER,
        color: colors.HEADHER,
        borderRadius: 5,
        width:"100%",
        marginRight: 5,
        marginLeft:-5,
        marginBottom: 10,
        paddingHorizontal: 20
    },
    inputShort:{
      height: 50,
      backgroundColor:"#fff" ,
      borderWidth:1,
      borderColor:colors.HEADHER,
      color: colors.HEADHER,
      borderRadius: 5,
      width:"49%",
      marginRight: 5,
      marginLeft:-5,
      marginBottom: 10,
      paddingHorizontal: 20
  }
    
});

