import React from 'react';
import { Image, StyleSheet, Text, View, TextInputAndroidProps, 
TextInput, 
KeyboardAvoidingView ,
TouchableOpacity , marginBotton,Button,Alert,
 onPress, title,

import Teladeloguin from './Teladeloguin ';

import Registrarse from './Registrarse ' ;
        
import Confirmacaodeemail from './Confirmacaodeemail';



} from 'react-native';

export default function Teladeloguin() {
  return (
    <View style={styles.container}>
        <View style={styles.OTE}>
      <TouchableOpacity>
          Voltar
        </TouchableOpacity>
  </View>
    
    
  
   <KeyboardAvoidingView style={styles.BOM}>
        <View>

  

        </View>

    <View >
        <TextInput
        style={styles.IN}
        
        placeholder="codigo de verificação" 
        autoCorrect={false}
        onChangeText ={(Oparam) => {}}
        
        ></TextInput>

        </View>
       

        <View  style={styles.EDB} >
        
          <TouchableOpacity   >
       onPress{() => {Alert.alert('Confirmado com Sucesso'); }
       
        }
     title=Enviar
     
    
     </TouchableOpacity>
        
        


            </View>,




    </KeyboardAvoidingView>








      
    </View>



  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: '#00fbff',
   // alignItems: 'center',
   // justifyContent: 'center',

  },
  
  IN:{ // estilo do input
   backgroundColor: '#FFF', // cor branca de dentro do input
        marginBottom: 3,
       padding: 10,
      textAlign: 'center', //Alinhamento do texto do input
     // flex: 'row',
     //AlignItems: 'center',
        justifyContente: 'center',
       width: '100%',
      //height: 200,
     borderColor: '#73748c',
      borderStyle:"solid",
       borderWidth: '2px',
      backgroundColor: '#FFF',
      marginTop: 175,
  },
  EDB:{ // estilo dos botões
  
       borderWidth: '1px',
       borderRadius: 7,
        width: 200,
       
      backgroundColor: "#dd2929", // cor Amarelo
      textAlign: 'center', 
      borderColor: "#ffdA00", // vermelho #ffdA00
      padding: 10,
      marginLeft:50,
      marginTop: 25,
    },
  
  
  
  });
  
  

