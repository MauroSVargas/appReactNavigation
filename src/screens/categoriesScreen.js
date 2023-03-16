import { StyleSheet, Text, View,Button  } from 'react-native'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>categoriesScreen</Text>
      <Button title="ir a Productos" onPress={() => {
                navigation.navigate('Productos')
            }}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'grey'
    },
    text:{
        fontSize: 30,
        fontFamily: 'OpenSans_400Regular',
        color: 'white'
    }
})