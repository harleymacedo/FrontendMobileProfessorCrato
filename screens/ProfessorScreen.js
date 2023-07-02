import { View, Text, StyleSheet } from 'react-native'

export default ProfessorScreen = () => {
    return (
        <View style={styles.containerPrincipal}>
            <Text>Professorse do Curso de Sistemas de Informação</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
    }
})