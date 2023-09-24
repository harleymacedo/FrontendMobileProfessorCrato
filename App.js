import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CabecalhoComp from './screens/CabecalhoComp'
import RodapeComp from './screens/RodapeComp'
import LoginScreen from './screens/LoginScreen'
import LaboratorioScreen from './screens/LaboratorioScreen'
import LaboratorioDetalheScreen from './screens/LaboratorioDetalheScreen'
import LaboratorioNovaOcorrencia from './screens/LaboratorioNovaOcorrencia'
import SobreScreen from './screens/SobreScreen'
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
                component={StackNavigatorLaboratorio}
                options={{
                    tabBarLabel: 'Reserva',
                    tabBarIcon: () => (<Image source={require('./assets/icons8-thin-client-32.png')} />)
                }}
            />

            <Tab.Screen
                name="ChamdoTab"
                component={StackNavigatorLaboratorio}
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

function StackNavigatorProfessor() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfessorScreen"
                component={ProfessorScreen}
                options={
                    { title: "Professor", }
                }
            />

            <Stack.Screen
                name="ProfessorDetalheScreen"
                component={ProfessorDetalheScreen}
                options={
                    { title: "Professor Detalhe" }
                }
            />
        </Stack.Navigator>
    )
}

function StackNavigatorComissao() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ComissaoScreen"
                component={ComissaoScreen}
                options={
                    { title: "Comissão" }
                }
            />

            <Stack.Screen
                name="ComissaoDetalheScreen"
                component={ComissaoDetalheScreen}
                options={
                    { title: "Comissão Detalhe" }
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
                name="LaboratorioNovaOcorrencia"
                component={LaboratorioNovaOcorrencia}
                options={
                    { title: "Laboratório" }
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
