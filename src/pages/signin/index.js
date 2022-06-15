import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function SignIn () {
    
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInDown" delay={600} style={styles.containerHeader}>
                <Text style={styles.textSaudacao}>Olá!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerFormularioLogin}>
                
                <Text style={styles.textFormularioLogin}>Email</Text>
                <TextInput 
                placeholder='Digite o seu e-mail'
                style={styles.textInput}
                />

                <Text style={styles.textFormularioLogin}>Senha</Text>
                <TextInput 
                placeholder='Digite a sua senha'
                style={styles.textInput}
                />

                <TouchableOpacity style={styles.buttonAcessar}
                onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButtonAcessar}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCadastrar}>
                    <Text style={styles.textButtonCadastrar}>Não possui uma conta? Cadastre-se Grátis!</Text>
                </TouchableOpacity>
                

            </Animatable.View>            
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        color: "#FFF"
    },

    containerHeader: {
        marginTop: '10%',
        marginBottom: '10%',
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    textSaudacao: {
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    containerFormularioLogin: {
        flex: 1,
        paddingStart: '10%',
        paddingEnd: '10%',
    },
    
    textFormularioLogin: {
        fontSize: 22,
        marginTop: 15,
    },

    textInput: {
        fontSize: 16,
        borderBottomWidth: 1.5,
        height: 40,
        marginBottom: 20
    },
    
    buttonAcessar:{
        backgroundColor: "#1e90ff",
        width: "100%",
        borderRadius: 8,
        paddingVertical: 5,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    buttonCadastrar:{
        
    },

    textButtonAcessar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FFF",
    },

    textButtonCadastrar: {
        marginTop: 5,
        alignSelf: 'center',
        color: '#a1a1a1'
    }
})