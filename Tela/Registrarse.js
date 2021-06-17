import React from 'react';
import { Image, StyleSheet, Text, View, TextInputAndroidProps, 
TextInput, 
KeyboardAvoidingView ,
TouchableOpacity , marginBotton,

import Registrarse from './Registrarse' ;
        
import Confirmacaodeemail from './Confirmacaodeemail' ;
        
import Teladeloguin from './Teladeloguin';        
        
        
        

} from 'react-native';

export default function Registrar() {
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
        
        placeholder="Nome" 
        autoCorrect={false}
        onChangeText ={(Oparam) => {}}
        
        ></TextInput>

        </View>
       

        <View >

        <TextInput
        style={styles.IN}


        placeholder="Sobrenome"
        autoCorrect={false}
        onChangeText= {() => {}}
        
        
        ></TextInput>

      
      
        <TextInput
        style={styles.IN}


        placeholder="Email"
        autoCorrect={false}
        onChangeText= {() => {}}
        
        
        ></TextInput>
        
        
        
        <TextInput
        style={styles.IN}


        placeholder="Senha"
        autoCorrect={false}
        onChangeText= {() => {}}
        
        
        ></TextInput>
          
    

            </View>



       <TouchableOpacity  style={styles.EDB}  >
        <Text>Cadastrar</Text>

       </TouchableOpacity>
    

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


BOM:{
 // backgroundColor: '#FFA07A',
     //   flex: 1,
     //   AlignItems: 'center',
     //   justifyContente: 'center',
      
        

    },

    IN:{// aqui onde estiliza os input
        backgroundColor: '#FFF',
        marginBottom: 3,
       padding: 10,
      textAlign: 'center', //Alinhamento do texto do input
       // flex: 1,
      //  AlignItems: 'center',
        justifyContente: 'center',
       width: '100%',
      // height: 200,
     borderColor: '#73748c',
      borderStyle:"solid",
       borderWidth: '1px',
      backgroundColor: '#FFF',

    },

    EDB:{ // estilo dos botões
  
       borderWidth: '2px',
       borderRadius: 7,
        width: 200,
      backgroundColor: "#ffdA00", // cor Amarelo
      textAlign: 'center', 
      borderColor: "#dd2929", // vermelho
      padding: 6,
      marginLeft:50,
    },
TOU:{// centralizar o Text Precisando de uma conta
  marginTop: 10,

},

IM:{// estilo pra  coloca imagem la em cima
flex: 1,
width: 40,
height: 40,
margin: 10,
},


OTE:{// o texto de registro
   
   justifyContente: 'center',

  color:'#00bbff',
  borderWidth: '2px',
 borderRadius: 7,
  width: 50,
  borderColor: "#dd2929", // vermelho
  padding: 6,
 marginBottom: 20,
 backgroundColor: 'yellow',
},


});

/*
function TeladeLoguin () {
    if("Email" =='Rafael@gmail.com' && "Senha" =='1234'){
        onPress = () => {
       const Teladeloguin =() =>{
           const navigation = props.navigation;
            navigation.replace('Home');
    
        } 
    }
   
   };
*/
