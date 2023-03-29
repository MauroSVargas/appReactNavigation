import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const BreadDetailsScreen = ({ route }) => {

const bread = useSelector(state=>state.breads.selected)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>Precio: $ {bread.price}</Text>
      <Text>{bread.weight}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
},
title: {
    fontSize:20,
    fontFamily: 'OpenSans_700Bold',
    marginBottom:10
}
})

export default BreadDetailsScreen