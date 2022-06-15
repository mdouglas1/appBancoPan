import { StyleSheet, Text, View, FlatList
 } from 'react-native';

import Header from '../../components/Header'; //Componentes
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const extrato = [
    
    {
        id: 1,
        label: 'ENEL',
        value: '65,00',
        date: '15/06/2022',
        type: 0 // despesas
    },

    {
        id: 2,
        label: 'PIX - Maria Souza',
        value: '300,00',
        date: '16/06/2022',
        type: 1 // receita
    },

    {
        id: 3,
        label: 'Pagamento - Salário',
        value: '7.000,00',
        date: '17/06/2022',
        type: 1
    }

]


export default function Home() {
    return(
        <View style={styles.container}>
            <Header name="Marcelo Souza"/>

            <Balance saldo='9.250,00' gastos='-527,00'/>

            <Actions/>

            <Text style={styles.tituloHome}>Últimas Movimentações</Text>

            <FlatList   // Lista de movimentações financeiras
                style={styles.estiloLista}
                data={extrato}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={ ({item}) => <Movements data={item}/> }
            /> 

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    tituloHome:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },

    estiloLista: {
        marginStart: 14,
        marginEnd: 14,
    }
})