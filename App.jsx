import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './screens/LoginScreen'
import LaboratorioScreen from './screens/LaboratorioScreen'
import LaboratorioDetalheScreen from './screens/LaboratorioDetalheScreen'
import ReservaScreen from './screens/ReservaScreen'
import ChamadoScreen from './screens/ChamadoScreen'
import ConfiguracoesScreen from './screens/ConfiguracoesScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function TabNavigatorCompleta() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >

            <Tab.Screen
                name="LaboratorioTab"
                component={StackNavigatorLaboratorio}
                options={{
                    tabBarLabel: 'Laboratorio',
                    tabBarIcon: () => (<Image source={require('./assets/icons8-thin-client-32.png')} />)
                }}
            />

            <Tab.Screen
                name="ReservaTab"
                component={StackNavigatorReserva}
                options={{
                    tabBarLabel: 'Reserva',
                    tabBarIcon: () => (<Image source={require('./assets/icons8-thin-client-32.png')} />)
                }}
            />

            <Tab.Screen
                name="ChamadoTab"
                component={StackNavigatorChamado}
                options={{
                    tabBarLabel: 'Chamado',
                    tabBarIcon: () => (<Image source={require('./assets/icons8-thin-client-32.png')} />)
                }}
            />

            <Tab.Screen
                name="ConfiguracoesScreen"
                component={ConfiguracoesScreen}
                options={{
                    tabBarLabel: 'Config.',
                    tabBarIcon: () => (<Image source={require('./assets/icons8-config-32.png')} />)
                }}
            />

        </Tab.Navigator>
    )
}

function StackNavigatorReserva() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ReservaScreen"
                component={ReservaScreen}
                options={
                    { title: "Reserva", }
                }
            />

            <Stack.Screen
                name="ReservaDetalheScreen"
                component={ReservaDetalheScreen}
                options={
                    { title: "Reserva Detalhe" }
                }
            />
        </Stack.Navigator>
    )
}

function StackNavigatorChamado() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ChamadoScreen"
                component={ChamadoScreen}
                options={
                    { title: "Chamado" }
                }
            />

            <Stack.Screen
                name="ChamadoDetalheScreen"
                component={ChamadoDetalheScreen}
                options={
                    { title: "Chamado Detalhe" }
                }
            />
        </Stack.Navigator>
    )
}

function StackNavigatorLaboratorio() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LaboratorioScreen"
                component={LaboratorioScreen}
                options={
                    { title: "Laboratório" }
                }
            />

            <Stack.Screen
                name="LaboratorioDetalheScreen"
                component={LaboratorioDetalheScreen}
                options={
                    { title: "Laboratorio Detalhe" }
                }
            />

            <Stack.Screen
                name="ReservaScreen"
                component={ReservaScreen}
                options={
                    { title: "Reserva" }
                }
            />

            <Stack.Screen
                name="ChamdoScreen"
                component={ChamadoScreen}
                options={
                    { title: "Chamado" }
                }
            />    
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ 
                        title: '',
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="TabNavigatorCompleta"
                    component={TabNavigatorCompleta}
                    options={{ 
                        title: '',
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});
