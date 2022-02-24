import React,{ useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import Form from '../../components/Form'

export default function Index(props) {
  const {navigation} = props;
  //useStateSnippet
  const [nombre, setNombre] = useState(null);
  const [edad, setEdad] = useState(null);
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null)
  const [icm, setICM] = useState(null)
  const [error, setError] = useState(null)

  const calcular = async () =>{
    if (!nombre || !edad || !peso || !altura) {
      await setError("Hay campos vacíos!")
    }else{
      const total = peso/(Math.pow(altura,2));
      await setICM(total.toFixed(2));
    }
    navigate()
  }
  
  const navigate = () =>{
    console.log({icm}, {error})
    // navigation.navigate("results", {
    //   error: {error},
    //   icm: {icm},
    //   edad: {edad},
    //   nombre: {nombre}
    // })
  }

  return (
   <View style={styles.app} >
    <StatusBar barStyle='light-content'/>
    <SafeAreaView style={styles.safeArea} >
      <View style={styles.background}></View>
      <Text style={styles.titleApp}>Calculadora IMC</Text>
      <Form
      setNombre={setNombre}
      setEdad={setEdad}
      setPeso = {setPeso}
      setAltura = {setAltura}/>
    </SafeAreaView>
    <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonCal} onPress={calcular}>
          <Text style={styles.calculate}>Calcular</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  app:{
    width:"100%",
    height:"100%",
    backgroundColor: '#e8bac4'
  },
  safeArea:{
    height: "70%",
    alignItems: "center"
  },
  titleApp:{
    fontSize:25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    marginBottom: 30
  },
  background:{
    backgroundColor: '#b0203f',
    height:200,
    width:"100%",
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    position: "absolute",
    zIndex: -1
  },
  footer:{
    position:"absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: '#b0203f',
        height: 100,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: "center",
        justifyContent: "center",
  },
  buttonCal:{
    backgroundColor:"#fff",
    padding: 16,
    borderTopStartRadius:30,
    borderTopEndRadius:30,
    width: "75%",
  },
  calculate:{
      fontWeight: "bold",
      fontSize: 18,
      color: "#000",
      textAlign: "center"
  }
});

