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
        <Text style={styles.TOU}>Ou</Text>

        <TouchableOpacity style={styles.EDB}>
            Registrar-se
        </TouchableOpacity>


    </KeyboardAvoidingView>








      <Text style={{color: '#888', fontSize: 18}}> 
        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>











  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00fbff',
    alignItems: 'center',
    justifyContent: 'center',

  },


BOM:{
  backgroundColor: '#FFA07A',
     //   flex: 1,
     //   AlignItems: 'center',
     //   justifyContente: 'center',
      
        

    },

    IN:{// aqui onde estiliza os input
        backgroundColor: '#FFF',
        marginBottom: 10,
       padding: 10,
      textAlign: 'center', //Alinhamento do texto do input
       // flex: 1,
      //  AlignItems: 'center',
        justifyContente: 'center',
       width: 200,
      // height: 200,
      //  borderColor: 'blue',
      //  borderStyle: "solid",
       // borderWidth: '2px'
      

    },

    EDB:{ // estilo dos botões

       borderWidth: '1px',
       borderRadius: 4,
        width: 200,
      backgroundColor: "#0095ff", // cor vermelha
      textAlign: 'center', 
    },
TOU:{// centralizar o Text OU 
  textAlign: 'center',

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
marginLeft: 120,


},
EsqeSenha:{// estilo do esqueci senha
color: 'blue',
fontSize: 12,
marginLeft: 120,

}


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


