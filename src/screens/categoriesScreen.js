import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const categoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>categoriesScreen</Text>
    </View>
  )
}

export default categoriesScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignContent: 'center',
        justifyContent:'center'
    }
})