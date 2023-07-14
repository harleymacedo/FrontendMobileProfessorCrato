import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default CardProfComp = (props) => {
    return (
        <View style={styles.containerPrincipal}>
            <Text style={styles.rotulo}>Nome:</Text>
            <Text style={styles.textoInfo}>{props.professor.nome}</Text>
            <Text style={styles.rotulo}>Email:</Text>
            <Text style={styles.textoInfo}>{props.professor.email}</Text>
            <Text style={styles.rotulo}>Área:</Text>
            <Text style={styles.textoInfo}>{props.professor.area}</Text>                
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
    }
})