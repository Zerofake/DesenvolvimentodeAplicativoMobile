
import {Text, View, TextInput, StyleSheet, TouchableOpacity,
borderWidth, Image, KeyboardAvoidingView, 
justifyContente
} from 'react-native';

import React from 'react';
import React from '/screens/Home';

import { NavigationContainer} from "@react-native/native";
import {createStackNavigation} from '@react-navigation/Stack'

const Stack = createStackNavigation();


export default function App(){

    



    <KeyboardAvoidingView style={styles.BOM}>
        <View>

    
    <Image
    
    source={('./img/BH.png')}

    />

    


        </View>

    <View>
        <TextInput
        styles={style.IN}
        
        placeholder="Email" 
        autoCorrect={false}
        onChangeText ={() => {}}
        
        ></TextInput>

        </View>

        <View>

        <TextInput
        
        placeholder="Senha"
        autoCorrect={false}
        onChangeText= {() => {}}
        
        
        ></TextInput>


            </View>

       <TouchableOpacity>
        <Text>Logar</Text>

       </TouchableOpacity>
        <Text>Ou</Text>

        <TouchableOpacity>
            Registrar-se
        </TouchableOpacity>


    </KeyboardAvoidingView>





}


const Teladeloguin = (props) =>{

    if("Email" =='Rafael@gmail.com' && "Senha" =='1234'){
        const irTela1 =() =>{
            const navigation = props.navigation;
            navigation.replace('Home');
    
        }

    }

    
   
   

    

};



const style = StyleSheet.creater ({

    BOM:{
        flex: 1,
        AlignItems: 'center',
        justifyContente: 'center',
        backgroundColor: "#99ff99",
        

    },

    IN:{// aqui onde estiliza os input
        backgroundColor: '#FFF',
        margin: '70%',
        pading: 10,

    },

    EDB:{ // estilo dos botões

        borderWidth: '2px',
        width: 100,


    }



        }
                 );

