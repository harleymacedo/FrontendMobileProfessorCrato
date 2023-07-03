import { View, Text, StyleSheet } from 'react-native'

export default LaboratorioDetalheScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Laboratorio: {props.nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9e6f2',
        border: '#336699',
        width: 250,
        height: 100,
        marginTop: 10
    },
    text1: {
        fontSize: 12
    }
})