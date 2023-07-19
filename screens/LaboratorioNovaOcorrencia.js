import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default LaboratorioNovaOcorrencia = () => {

    return (
        <SafeAreaView style={styles.container1}>

            <Text style={styles.textoTitulo2} >SADO</Text>
            <Text style={styles.textoTitulo3}>Sistema de Apoio ao Docente</Text>
            <Text style={styles.textoTitulo1} >Nova ocorrência</Text>

            <View style={styles.containerForm}>
                <TextInput style={styles.input1} placeholder='Qual Laboratório' />
                <TextInput style={styles.input1} placeholder='Título' />
                <TextInput style={styles.input1} placeholder='Descrição' />
                <TextInput style={styles.input1} placeholder='Nível de urgência' />

            </View>

            <View>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.textButton2}> Enviar </Text>
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
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20,
        height: 100,
        // backgroundColor: 'gray'
    },
    input1: {
        width: 350,
        height: 30,
        borderWidth: 1,
        borderColor: '#77aa88',
        borderRadius: 3,
        marginTop: 10
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
        height: 350,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#77aa88',
        marginBottom: 60,
        marginTop: 20
    }

})