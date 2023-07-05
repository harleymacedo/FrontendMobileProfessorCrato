import { View, Text, StyleSheet } from 'react-native'

export default ComissaoScreen = () => {
    return (
        <View style={styles.containerPrincipal}>
            <Text>Lista de comissões do Campus</Text>
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