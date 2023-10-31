import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export function SubmitButton({onPress}) {


  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>Calcular Média</Text>
      </TouchableOpacity>
    </View>
  );
}



export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [average,setAverage]=useState('');
  const [showMessage,setShowMessage] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  const showValues = () => {
    
    const nota1 = parseFloat(value1);
    const nota2 = parseFloat(value2);
    const nota3 = parseFloat(value3);
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      setShowMessage(true); // Show a message if any input is not a number
    } else {
      const soma = nota1 + nota2 + nota3;
      setAverage(soma / 3); // Calculate and set the average
      setShowMessage(false); // Hide the message
      const calculatedAverage = soma / 3;
      setAverage(calculatedAverage);
      const passingAverage =60;
      const passed = calculatedAverage >= passingAverage;
      setHasPassed(passed);
    }
    console.log(value1);
    console.log(value2);
    console.log(value3);
    if (!passed) {
      const pointsToPass = passingAverage - calculatedAverage;
      setPointsNeeded(pointsToPass); // Calculate and set points needed
    }
  
  }

  return (


    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        
        <Text style={styles.presentationText}>COlOQUE AS NOTAS DAS º1 ,º2 e º3 VAs PARA CAUCULAR A SUA MÉDIA </Text>

        <StatusBar style="auto" />

        <View>
          <Text style={styles.text}>Nota da º1 VA</Text>
          <TextInput style={styles.textinput} onChangeText={(text) => setValue1(text)} keyboardType="numeric"></TextInput>
        </View>

        <View>
          <Text style={styles.text}>Nota da º2 VA</Text>
          <TextInput style={styles.textinput} onChangeText={(text) => setValue2(text)} keyboardType="numeric"></TextInput>
        </View>

        <View>
          <Text style={styles.text}>Nota da º3 VA</Text>
          <TextInput style={styles.textinput} onChangeText={(text) => setValue3(text)} keyboardType="numeric" ></TextInput>
        </View>
    

        <SubmitButton onPress={showValues}/>
        
        {showMessage ? (
          <Text style={styles.message}>Por favor, inserir as notas das trés VAs e preencher com números.</Text>
        ) : average ? (
          <Text style={styles.message}>Média: {average.toFixed(2)}</Text>
        ) : null}
         <Text style={styles.message}>
              {hasPassed ? 'Você passou na disciplina!'
                : 'Você não passou na disciplina.'}
            </Text>
            
      </View>

    </View>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#0a2341',
    justifyContent: 'center'
  },
  textinput: {
    borderColor: 'black',
    borderWidth: '2px',
    borderRadius: '6px',
    padding: 7,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: 'white',
   

  },
  text: {
    color: 'white',
    maxWidth: '400px',
    fontWeight: 'bold'
  },
  presentationText: {
    color: 'white',
    maxWidth: '400px',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '35px'
  },
  button: {
    width: 120,
    height:50,
    backgroundColor:'blue',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    margin:20,
},

message: {
  color: 'white',
  fontSize: 16,
  textAlign: 'center',
  marginTop: 10,
},

});
