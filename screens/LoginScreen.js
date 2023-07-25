import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"

export default LoginScreen = ({ navigation }) => {

    const navegarParaTabNavigatorCompleta = () => {
        navigation.navigate('TabNavigatorCompleta')
    }

    return (
        <SafeAreaView style={styles.container1}>

            <View>
                <Text style={styles.textoTitulo2} >SADO</Text>
                <Text style={styles.textoTitulo3}>Sistema de Apoio ao Docente</Text>
                <Text style={styles.textoTitulo1} >Login</Text>
            </View>

            <View style={styles.containerDescricao}>
                <TouchableOpacity style={styles.button1} onPress={ navegarParaTabNavigatorCompleta } >
                    <Text style={styles.textButton1}>Login com Google</Text>
                </TouchableOpacity>
            </View>

            <View>
                
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
    containerDescricao: {
        width: 300,
        marginTop: 80
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
    },
    image1: {
        marginTop: 60,
        width: 60,
        height: 30
    }
})