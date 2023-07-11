import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CardLaboratorioComp from '../components/CardLaboratorioComp'

export default LaboratorioScreen = () => {

    const [laboratorios, setLaboratorios] = useState([])
    const [texto, setTexto] = useState('')

    const atualizarTexto = (value) => {
        setTexto(value)
    }

    const pesquisar = async () => {
        try {
            const url = `http://localhost:3000/laboratorio/porNome/${texto}`
            const result = await axios.get(url)
            setLaboratorios(result.data.laboratorios)
        } catch (error) {
            Alert.alert('Erro durante a consulta')
        }
    }

    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.textoTitulo2} >SADO</Text>
            <Text style={styles.textoTitulo3}>Sistema de Apoio ao Docente</Text>
            <Text style={styles.textoTitulo1} >Laboratório</Text>
            <View style={styles.containerForm}>
                <TextInput style={styles.input1} onChangeText={atualizarTexto} placeholder='Pesquisa por nome' />
                <TouchableOpacity style={styles.button1} onPress={pesquisar}>
                    <Text style={styles.textButton1} >Filtrar</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.containerResultado}>
                {
                    laboratorios.map( (laboratorioAtual) => {
                        return(
                            <CardLaboratorioComp key={laboratorioAtual._id} laboratorio={laboratorioAtual} />
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
        height: 100,
        // backgroundColor: 'gray'
    },
    input1: {
        width: 200,
        height: 30,
        borderWidth: 1,
        borderColor: '#77aa88',
        borderRadius: 3
    },
    button1: {
        width: 60,
        height: 30,
        borderRadius: 3,
        backgroundColor: '#77aa88',
        marginLeft: 4
    },
    textButton1: {
        textAlign: 'center',
        paddingTop: 5
    },
    containerResultado: {
        width: 300,
        height: 450,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#77aa88',
        marginBottom: 60,
        marginTop: 20,
        // backgroundColor: 'silver'
    }

})