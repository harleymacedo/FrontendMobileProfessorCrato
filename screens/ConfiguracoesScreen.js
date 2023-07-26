import {SafeAreaView, View, Text, Table, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default SobreScreen = () => {
    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.textoTitulo2} >SADO</Text>
            <Text style={styles.textoTitulo3}>Sistema de Apoio ao Docente</Text>
            <Text style={styles.textoTitulo1} >Configurações</Text>
            <View style={styles.containerDescricao}>
                <TouchableOpacity>
                    <Text style={styles.textoDescricao}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/LogoLaisIFCE.png')} style={styles.image1}/>
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
    textoDescricao: {
        fontFamily: 'Verdana',
        textAlign: 'justify',
        fontSize: 14
    },
    image1: {
        marginTop: 60,
        width: 60,
        height: 30
    }
})