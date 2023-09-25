import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"

export default LoginScreen = ({ navigation }) => {

    const navegarParaTabNavigatorCompleta = () => {
        navigation.navigate('TabNavigatorCompleta')
    }

    return (
        <SafeAreaView style={styles.container1}>

            <View style={styles.containerCabecalho}>
                <Text style={styles.textoTitulo2} >SIGELAB</Text>
                <Text style={styles.textoTitulo3}>Sistema de Gestão de Laboratório</Text>
                <Text style={styles.textoTitulo1} >Login</Text>
            </View>

            <View style={styles.containerCentro}>
                <TouchableOpacity style={styles.button1} onPress={ navegarParaTabNavigatorCompleta } >
                    <Text style={styles.textButton1}>Login com Google</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerRodape}>
                <Text>Contato | Sobre</Text>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    containerCabecalho: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1: {
        width: 160,
        height: 40,
        borderRadius: 3,
        borderWidth: 1,
        paddingTop: 8
    },
    textButton1: {
        fontFamily: 'Verdana',
        textAlign: 'center',
        fontSize: 14,
        color: 'blue'
    }
})