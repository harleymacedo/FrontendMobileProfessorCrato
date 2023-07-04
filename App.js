import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CabecalhoComp from './components/CabecalhoComp'
import RodapeComp from './components/RodapeComp'
import ProfessorScreen from './screens/ProfessorScreen'
import LaboratorioScreen from './screens/LaboratorioScreen'
import ProfessorDetalheScreen from './screens/ProfessorDetalheScreen'
import LaboratorioDetalheScreen from './screens/LaboratorioDetalheScreen'
import SobreScreen from './screens/SobreScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function StackNavigator () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfessorDetalheScreen" component={ProfessorDetalheScreen} 
                options={{
                title: "Professor Detalhe",
                // headerStyle: {
                // backgroundColor: '#124050',
                // },
                headerTintColor: "#fff"
            }}/>

            <Stack.Screen name="LaboratorioDetalheScreen" component={LaboratorioDetalheScreen} 
            options={{
                title: "Laboratorio Detalhe",
                headerStyle: {
                    backgroundColor: '#124050',
                },
                headerTintColor: "#fff"
            }}/>
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>            
            <Tab.Navigator screenOptions={{ headerShown: false }} >

                <Tab.Screen 
                    name="ProfessorScreen"
                    component={ProfessorScreen}
                    options={{ 
                        tabBarLabel: 'Professor', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-professor-32.png')} />) 
                    }} 
                />

                <Tab.Screen 
                    name="LaboratorioScreen"
                    component={LaboratorioScreen}
                    options={{ 
                        tabBarLabel: 'Laboratorio', 
                        tabBarIcon: () => (<Image source={require('./assets/icons8-evento-32.png')} />) 
                    }} 
                />

                <Tab.Screen 
                    name="SobreScreen"
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
