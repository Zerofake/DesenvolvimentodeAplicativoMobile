import React from 'react';
import { Image, StyleSheet, Text, View, TextInputAndroidProps, 
TextInput, 
KeyboardAvoidingView ,
TouchableOpacity ,


} from 'react-native';

export default function Teladeloguin() {
  return (
    <View style={styles.container}>
      
    

    <Image style={styles.IM}

    
    source={('./img/BH.png')}

    ></Image>

   <KeyboardAvoidingView style={styles.BOM}>
        <View>

    

    


        </View>

    <View >
        <TextInput
        style={styles.IN}
        
        placeholder="Email" 
        autoCorrect={false}
        onChangeText ={(Oparam) => {}}
        
        ></TextInput>

        </View>
        <Text style={styles.Esqemail}>Esqueci Email</Text>



        <View >

        <TextInput
        style={styles.IN}


        placeholder="Senha"
        autoCorrect={false}
        onChangeText= {() => {}}
        
        
        ></TextInput>

      
          
          <Text style={styles.EsqeSenha}> Esqueci senha</Text>

            </View>



       <TouchableOpacity  style={styles.EDB}  >
        <Text>Logar</Text>

       </TouchableOpacity>
        <View style={styles.TudoAlinhado}>
  <Text style={styles.TOU}>Precisando de uma conta?</Text> 
        <TouchableOpacity style={styles.OTE}>
        Registrar-se
        </TouchableOpacity>
  </View>

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
        marginBottom: 2,
       padding: 10,
      textAlign: 'center', //Alinhamento do texto do input
       // flex: 1,
      //  AlignItems: 'center',
        justifyContente: 'center',
       width: '100%',
      // height: 200,
     borderColor: '#73748c',
      borderStyle:"solid",
       borderWidth: '1px'
      

    },

    EDB:{ // estilo dos botões
  
       borderWidth: '2px',
       borderRadius: 7,
        width: 250,
      backgroundColor: "#ffdA00", // cor Amarelo
      textAlign: 'center', 
      borderColor: "dd2929", // vermelho
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

Esqemail:{ // estilo de  texto ali no <Text  esqueci email
fontSize: 12, // tamanho da letra
color: 'blue',
marginLeft: 250,// era 120
marginBottom: 8,


},
EsqeSenha:{// estilo do esqueci senha
color: 'blue',
fontSize: 12,
marginLeft: 250, // era 120 de espaço
marginBottom: 8,

},

OTE:{// o texto de registro

  color:'#00bbff',
  marginBottom: 40,
  marginLeft: 200,
},

TudoAlinhado:{
 //flex: ,
 justifyContent:'end', 
 alignItems: 'flex-end',
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







© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
