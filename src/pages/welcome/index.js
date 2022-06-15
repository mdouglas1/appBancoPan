import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'; // Biblioteca de animação da tela de Login
import { useNavigation } from '@react-navigation/native'; // Utilizado para Navegação

export default function Welcome () {
    const navigation = useNavigation(); //Hook de navegação

    return (
        <View style={styles.container}>
        
            <View style={styles.containerLogo}>
                <Animatable.Image // Primeiro a inserção do logo
                    animation="fadeInLeft"
                    source={require('../../../assets/logoBancoPan.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerBoasVindas}>
                <Text style={styles.textBoasVindas}>Seja Bem-Vindo ao Banco Pan</Text>
                <Text style={styles.textComecar}>Clique no botão abaixo para Começar</Text>

                <TouchableOpacity 
                style={styles.buttonComecar}
                onPress={ () =>navigation.navigate('Login')}>
                    <Text style={styles.textButtonComecar}>Começar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    containerLogo: { //Área do Logo com 2/3
        flex: 2,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerBoasVindas: { //Área de boas vindas 1/3
        flex: 1,
        backgroundColor: '#1e90ff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    textBoasVindas: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 28,
        marginBottom: 12
    },

    textComecar: {
        fontSize: 15,
        color: '#FFF',
        alignSelf: 'center',
        marginBottom: 20
    },

    buttonComecar: {
        position: 'absolute',
        backgroundColor: "#FFF",
        borderRadius: 50,
        paddingVertical: 10,
        width: '60%',
        alignSelf: 'center',
        bottom: '25%',
        alignItems: 'center',
        justifyContent: 'center'

    },

    textButtonComecar: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    }
})