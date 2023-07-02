import { View, Text, StyleSheet } from 'react-native'

export default LaboratorioScreen = () => {
    return (
        <View style={styles.containerPrincipal}>
            <Text>Laboratório de Informática</Text>
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