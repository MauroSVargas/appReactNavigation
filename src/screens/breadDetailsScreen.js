import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BreadDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>breadDetailsScreen</Text>
    </View>
  )
}

export default BreadDetailsScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignContent: 'center',
        justifyContent:'center'
    }
})