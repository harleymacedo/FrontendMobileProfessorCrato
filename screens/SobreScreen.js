import {SafeAreaView, View, Text, Table, StyleSheet, Image} from 'react-native'

export default SobreScreen = () => {
    return (
        <SafeAreaView style={styles.container1}>
            <Text style={styles.text1} >Sobre</Text>
            <Text style={styles.text2} >Laboratory Of Information Systems</Text>
            <Image source={require('../assets/LogoLaisIFCE.png')} style={styles.image1}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text1: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 20,
        fontSize: 26
    },
    text2: {
        color: '#119922',
        fontFamily: 'Verdana',
        marginTop: 40,
        fontSize: 20
    },
    image1: {
        marginTop: 20,
        width: 100,
        height: 50
    }
})