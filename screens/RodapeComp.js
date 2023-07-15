import { View, Text, StyleSheet } from 'react-native'

export default RodapeComp = () => {
    return (
        <View style={styles.containerPrincipal}>
            <Text style={styles.text1}>Desenvolvido por Harley Macêdo - 2023</Text>
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
        fontSize: 12,
        color: 'green',
        fontFamily: 'Verdana'
    }
})