import React,{ useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button, Image, TouchableOpacity } from 'react-native';
import Form from '../../components/Form'

export default function Index() {
  //useStateSnippet
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null)
  const [errorM, setErrorM] = useState(null)

  const calcular = () =>{
    reset()
    // console.log("cap -> "+capital+ ", int -> "+interes+", mes -> "+meses);
    if (!capital || !interes || !meses) {
      setErrorM("Hay campos vacíos!")
    }else{
      const inte = interes/100;
      const pays = capital/((1-Math.pow(inte+1, -meses))/inte)
      setTotal({
        pagoMes: pays.toFixed(2),
        pagoTotal: (pays*meses).toFixed(2)
      })
    }
  }

  const reset = () =>{
    setErrorM(''),
    setTotal(null)
  }

  return (
   <View style={styles.app} >
    <StatusBar barStyle='light-content'/>
    <SafeAreaView style={styles.safeArea} >
      <View style={styles.background}></View>
      <Text style={styles.titleApp}>Calculadora IMC</Text>
      <Form
      setCapital={setCapital}
      setInteres={setInteres}
      setMeses = {setMeses}/>
    </SafeAreaView>
    <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonCal} >
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

