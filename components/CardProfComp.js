import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default CardProfComp = (props) => {
    return (
        <View style={styles.containerPrincipal}>
            <Text>NOME: {props.professor.nome}</Text>
            <Text>EMAIL: {props.professor.email}</Text>
            <Text>ÁREA: {props.professor.area}</Text>
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