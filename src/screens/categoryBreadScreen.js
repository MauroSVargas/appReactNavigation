import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CategoryBreadScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>categoryBreadScreen</Text>
            <Button title="ir a Detalle del Producto" onPress={() => {
                navigation.navigate('Detalles')
            }}/>
        </View>
    )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    text:{
        fontSize: 30,
        fontFamily: 'OpenSans_400Regular',
        color: 'white'
    }
})