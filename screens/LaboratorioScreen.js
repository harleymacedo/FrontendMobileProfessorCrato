import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CardLaboratorioComp from './CardLaboratorioComp'

export default LaboratorioScreen = ({navigation}) => {

    const [laboratorios, setLaboratorios] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        const getDadosInciais = async () => {
            try {
                setIsLoading(true)                
                const url = 'http://localhost:3000/laboratorio/todos'
                const labsBuscados = await axios.get(url)
                setLaboratorios(labsBuscados.data.laboratorios)
                setIsLoading(false)
            } catch (error) {
                Alert.alert('Erro durante a consulta')
            }
        }
        getDadosInciais()
    }, [])

    const navegarParaOcorrencia = () => {
        navigation.navigate('LaboratorioNovaOcorrencia')
    }

    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.textoTitulo2} >SADO</Text>
            <Text style={styles.textoTitulo3}>Sistema de Apoio ao Docente</Text>
            <Text style={styles.textoTitulo1} >Laboratório</Text>
            <View style={styles.containerForm}>
                <TouchableOpacity style={styles.button2} onPress={navegarParaOcorrencia}>
                    <Text style={styles.textButton2}> + Nova ocorrência </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.containerResultado}>
                {
                    laboratorios.map( (laboratorioAtual) => {
                        return(
                            <CardLaboratorioComp key={laboratorioAtual._id} laboratorio={laboratorioAtual} navigation={navigation} />
                        )
                    })
                }
            </ScrollView>
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
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        height: 50,
    },
    input1: {
        width: 200,
        height: 30,
        borderWidth: 1,
        borderColor: '#77aa88',
        borderRadius: 3
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
        height: 370,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#77aa88',
        marginBottom: 60,
        marginTop: 20
    }

})