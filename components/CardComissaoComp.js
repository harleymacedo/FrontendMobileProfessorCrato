import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default CardComissaoComp = (props) => {
    return (
        <View style={styles.containerPrincipal}>
            <Text style={styles.rotulo}>Nome:</Text>
            <Text style={styles.textoInfo}>{props.comissao.nome}</Text>
            <Text style={styles.rotulo}>Descrição:</Text>
            <Text style={styles.textoInfo}>{props.comissao.descricao}</Text>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.textButton1}> + Detalhes </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: '#d1e0e0',
        borderWidth: 1,
        borderColor: 'black',
        margin: 14,
        borderRadius: 4,
        padding: 8
    },
    rotulo: {
        fontWeight: 'bold',
        fontSize: 14
    },
    textoInfo: {
        fontSize: 10,
    },
    button1: {
        width: 100,
        height: 30,
        borderRadius: 3,
        backgroundColor: '#889988',
        marginTop: 5
    },
    textButton1: {
        textAlign: 'center',
        paddingTop: 5
    },
})