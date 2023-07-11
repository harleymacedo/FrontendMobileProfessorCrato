import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default CardComissaoComp = (props) => {
    return (
        <View style={styles.containerPrincipal}>
            <Text>NOME: </Text>
            <Text>INÍCIO: </Text>
            <Text>TÉRMINO: </Text>
            <Text>OBJETIVO: </Text>
            <TouchableOpacity>
                <Text>+ Detalhes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: 'silver',
        margin: 14,
        borderRadius: 4,
        padding: 8
    }
})