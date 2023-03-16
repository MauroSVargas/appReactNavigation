import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>categoriesScreen</Text>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignContent: 'center',
        justifyContent:'center'
    }
})