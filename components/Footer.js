import React from 'react'

export default function Footer(props) {
    const {navigate} = props;
  return (
    <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonCal} onPress={navigate}>
          <Text style={styles.calculate}>Calcular</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
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
  
  