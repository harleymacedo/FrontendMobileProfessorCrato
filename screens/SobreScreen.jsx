import {SafeAreaView, View, Text, Table, StyleSheet, Image} from 'react-native'

export default SobreScreen = () => {
    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.textoTitulo2} >SADO</Text>
            <Text style={styles.textoTitulo3}>Sistema de Apoio ao Docente</Text>
            <Text style={styles.textoTitulo1} >Sobre</Text>
            <View style={styles.containerDescricao}>
                <Text style={styles.textoDescricao}>
                    O Sistema de Apoio ao Docente(SADO) foi desenvolvido no Laboratorio de Sistemas de Informação(LaIS) do IFCE Campus Crato, pelo professor
                    e pesquisador Harley Macêdo. O sistema tem como objetivo auxiliar tarefas relacionadas à reserva de laboratórios,
                    registro de manuntenção em laboratórios e busca de informações básicas sobre os professores do curso e comissões
                    de trabalho. O sistema possui código fonte aberto e pode ser utilizado para aulas.
                </Text>
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