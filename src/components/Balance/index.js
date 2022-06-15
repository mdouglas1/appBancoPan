import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MotiView } from 'moti';

export default function Balance({ saldo, gastos }) {
 return (
   <MotiView 
   style={styles.container}
  
   from={{
       rotateX: '-10deg',
       opacity: 0,
   }}

   animate={{
       rotateX: '0deg',
       opacity: 1,
   }}

   transition={{
       type: 'timing',
       delay: 300,
       duration: 900
   }}
   >
       
       <View style={styles.itemMovimentacaoFinanceira}>
                <Text style={styles.textTipoMovimentacao}>Saldo</Text>
                    <View style={styles.content}>
                        <Text style={styles.simboloMoeda}>R$</Text>
                        <Text style={styles.valorReceita}>{saldo}</Text>
                    </View>
            </View>

            <View style={styles.itemMovimentacaoFinanceira}>
                <Text style={styles.textTipoMovimentacao}>Gastos</Text>
                    <View style={styles.content}>
                        <Text style={styles.simboloMoeda}>R$</Text>
                        <Text style={styles.valorGastos}>{gastos}</Text>
                    </View>
            </View>

   </MotiView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },

    itemMovimentacaoFinanceira: {

    },

    textTipoMovimentacao: {
        fontSize: 20,
        color: '#DADADA'
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    simboloMoeda:{
        color: '#DADADA',
        marginRight: 6
    },

    valorReceita: {
        fontSize: 22,
        color: '#2ecc71'
    },

    valorGastos: {
        fontSize: 22,
        color: '#e74c3c'
    }
})