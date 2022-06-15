import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MotiView, AnimatePresence, MotiText } from 'moti';

export default function Movements({ data }) {

 const [showValue, setShowValue] = useState(false);

 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
        
        <Text style={styles.dataMovimentacao}>{data.date}</Text>

        <View style={styles.detalhesMovimentacao}>
            <Text style={styles.textDescricaoMovimentacao}>{data.label}</Text>

            { showValue ? (
            
            <AnimatePresence exitBeforeEnter>
            
            <MotiText 
            
            style={data.type === 1 ? styles.textValorReceita : styles.textValorGastos}
            
            from={{
                translateX: 100,
            }}

            animate={{
                translateX: 0,
            }}

            transition={{
                type: 'timing',
                duration: 500,
            }}

            > 
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}` } 
            </MotiText>

            </AnimatePresence >

                ) : ( 

            <AnimatePresence exitBeforeEnter>
                    <MotiView 
                    
                    style={styles.skeleton}
                    
                    from={{
                        opacity: 0
                    }}
                    
                    animate={{
                        opacity: 1
                    }}
                    
                    transition={{
                        type: 'timing'
                    }}
                    >
                    </MotiView>
            </AnimatePresence>

            )}
        </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },

    dataMovimentacao: {
        color: '#DADADA',
        fontWeight: 'bold'
    },

    detalhesMovimentacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },

    textDescricaoMovimentacao: {
        fontWeight: 'bold',
        fontSize: 16
    },

    textValorReceita:{
        fontSize: 16,
        color: "#2ecc71",
        fontWeight: 'bold'
    },

    textValorGastos: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },

    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    }
})