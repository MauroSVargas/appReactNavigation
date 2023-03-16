import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans'

const BreadDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>breadDetailsScreen</Text>
    </View>
  )
}

export default BreadDetailsScreen

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