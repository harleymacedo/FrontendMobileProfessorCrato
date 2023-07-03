import { View, Text, Image, StyleSheet } from 'react-native'

export default CabecalhoComp = () => {
    return (
        <View style={styles.containerPrincipal}>
            <Text style={styles.text1}>App Professor IFCE Crato</Text>
            <Image source={require('../assets/icons8-professor-40.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        fontSize: 22,
        color: 'green',
        fontFamily: 'Verdana'
    }
})