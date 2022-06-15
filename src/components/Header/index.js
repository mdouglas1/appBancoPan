import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText  } from 'moti';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; // Condicional para o IOS. Se for android +22 senão + 64

export default function Header({ name }) {
    return(
        <View style={styles.container}>
            <MotiView 
            style={styles.nameIconUser}
            from={{
                translateY: -150,
                opacity: 0,
            }}
            
            animate={{
                translateY: 0,
                opacity: 1,
            }}
            
            transition={{
                type: "timing",
                duration: 800,
                delay: 300,
            }}
            >
                <MotiText 
                style={styles.userNameText}
                
                from={{
                    translateX: -300,
                }}
                
                animate={{
                    translateX: 0
                }}
                
                transition={{
                    type: "timing",
                    duration: 800,
                    delay: 800
                }}
                >
                    {name}
                </MotiText>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUserIcon}>
                    <Feather name='user' size={27} color='#FFF' />
                </TouchableOpacity> 
            </MotiView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e90ff',
        paddingTop: statusBarHeight,
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        flexDirection: 'row'
    },

    nameIconUser: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    userNameText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },

    buttonUserIcon: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    }
})