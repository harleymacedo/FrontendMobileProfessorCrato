import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CabecalhoComp from './screens/CabecalhoComp'
import RodapeComp from './screens/RodapeComp'
import ProfessorScreen from './screens/ProfessorScreen'
import ComissaoScreen from './screens/ComissaoScreen'
import AtividadeScreen from './screens/AtividadeScreen'
import LaboratorioScreen from './screens/LaboratorioScreen'
import ProfessorDetalheScreen from './screens/ProfessorDetalheScreen'
import LaboratorioDetalheScreen from './screens/LaboratorioDetalheScreen'
import ComissaoDetalheScreen from './screens/ComissaoDetalheScreen'
import LaboratorioNovaOcorrencia from './screens/LaboratorioNovaOcorrencia'
import SobreScreen from './screens/SobreScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

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
            <Tab.Navigator screenOptions={{ headerShown: false }} >

                <Tab.Screen
                    name="ProfessorTab"
                    component={StackNavigatorProfessor}
                    options={{
                        tabBarLabel: 'Professor',
                        tabBarIcon: () => (<Image source={require('./assets/icons8-professor-32.png')} />)
                    }}
                />

                <Tab.Screen
                    name="ComissaoTab"
                    component={StackNavigatorComissao}
                    options={{
                        tabBarLabel: 'Comissão',
                        tabBarIcon: () => (<Image source={require('./assets/icons8-grupo-b-32.png')} />)
                    }}
                />

                <Tab.Screen
                    name="LaboratorioTab"
                    component={StackNavigatorLaboratorio}
                    options={{
                        tabBarLabel: 'Laboratorio',
                        tabBarIcon: () => (<Image source={require('./assets/icons8-thin-client-32.png')} />)
                    }}
                />

                <Tab.Screen
                    name="SobreTab"
                    component={SobreScreen}
                    options={{
                        tabBarLabel: 'Sobre',
                        tabBarIcon: () => (<Image source={require('./assets/icons8-sobre-32.png')} />)
                    }}
                />

            </Tab.Navigator>
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
