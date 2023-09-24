import { SafeAreaView, View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react'

export default ConfiguracoesScreen = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const navegarParaLogin = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.textoTitulo2} >SADO</Text>
            <Text style={styles.textoTitulo3}>Sistema de Apoio ao Docente</Text>
            <Text style={styles.textoTitulo1} >Configurações</Text>
            <View style={styles.containerCentral}>
                <View style={styles.containerSwitch}>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.textoSwitch}>Notificações</Text>
                </View>
                <TouchableOpacity style={styles.buttonLogout} onPress={navegarParaLogin}>
                    <Text style={styles.textoButtonLogout}>
                        Logout
                    </Text>
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
    containerCentral: {
        width: 300,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSwitch: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoSwitch: {
        marginLeft: 10
    },
    textoButtonLogout: {
        fontFamily: 'Verdana',
        textAlign: 'justify',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 4
    },
    buttonLogout: {
        backgroundColor: '#ff704d',
        borderRadius: 4,
        width: 120,
        height: 30,
        marginTop: 60
    }
})