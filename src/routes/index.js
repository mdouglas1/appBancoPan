import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/welcome'; // importar as páginas para serem inseridas na rota
import SignIn from '../pages/signin';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

// Configuração das rotas
export default function Routes() {
    return(    //Retornar um componente
        <Stack.Navigator>
            <Stack.Screen //Cada Stack.Screen é uma tela
            name='Boas Vindas' 
            component={Welcome}
            options={{ headerShown: false }} 
            />

            <Stack.Screen 
            name='Login' 
            component={SignIn}
            options={{ headerShown: false }} 
            />

            <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
            />
            
        </Stack.Navigator>
    )
}