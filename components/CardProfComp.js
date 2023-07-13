import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default CardProfComp = (props) => {
    return (
        <View style={styles.containerPrincipal}>
            <Text>NOME: {props.professor.nome}</Text>
            <Text>EMAIL: {props.professor.email}</Text>
            <Text>ÁREA: {props.professor.area}</Text>            
            <Text>FONE: {props.professor.area}</Text>            
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
    }
})