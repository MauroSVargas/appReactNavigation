import { StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'


const BreadDetailsScreen = ({ route, navigation }) => {

  const {bread} = route.params

  useEffect(() => {
    navigation.setOptions({
      title: bread.name
    })
  },[])
  
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>$ {bread.price}</Text>
      <Text>{bread.weight}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title:{
    fontSize: 20,
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 10
  }
})

export default BreadDetailsScreen