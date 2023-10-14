import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default ReservaScreen = ({navigation}) => {

    const [reservas, setReservas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        const getDadosInciais = async () => {
            try {
                setIsLoading(true)                
                const url = 'http://localhost:3000/reservas/todas'
                const reservasBuscadas = await axios.get(url)
                setReservas(reservasBuscadas.data.reservas)
                setIsLoading(false)
            } catch (error) {
                Alert.alert('Erro durante a consulta')
            }
        }
        getDadosInciais()
    }, [])

    const navegarParaNovaReserva = () => {
        navigation.navigate('ChamadoScreen')
    }

    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.textoTitulo2} >SIGELAB</Text>
            <Text style={styles.textoTitulo3}>Sistema de Gestão de Laboratório</Text>
            <Text style={styles.textoTitulo1} >Reserva</Text>
            <View style={styles.containerForm}>
                <TextInput style={styles.input1} onChangeText={null} placeholder='Laboratório' />
                <TextInput style={styles.input1} onChangeText={null} placeholder='Hora de início' />
                <TextInput style={styles.input1} onChangeText={null} placeholder='Hora de Fim' />
                <TextInput style={null} onChangeText={null} />
                <View style={styles.containerResultado}>
                    <Text>Calendar</Text>
                </View>
                <TouchableOpacity style={styles.button2} onPress={navegarParaNovaReserva}>
                    <Text style={styles.textButton2}> Confirmar </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textoTitulo1: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 40,
        fontSize: 28
    },
    textoTitulo2: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 10,
        fontSize: 18
    },
    textoTitulo3: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 5,
        fontSize: 12
    },
    containerForm: {
        flex: 1,
        flexDirection: 'collumn',
        justifyContent: 'center',
        marginTop: 20,
        height: 50,
    },
    input1: {
        width: 300,
        height: 30,
        borderWidth: 1,
        borderColor: '#77aa88',
        borderRadius: 3,
        marginTop: 4
    },
    button1: {
        width: 94,
        height: 30,
        borderRadius: 3,
        backgroundColor: '#77aa88',
        marginLeft: 4
    },
    textButton1: {
        textAlign: 'center',
        paddingTop: 5
    },
    button2: {
        width: 300,
        height: 30,
        borderRadius: 3,
        backgroundColor: '#889988',
        marginLeft: 4
    },
    textButton2: {
        textAlign: 'center',
        paddingTop: 5
    },
    containerResultado: {
        width: 300,
        height: 200,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#77aa88',
        marginBottom: 60,
        marginTop: 20
    }

})