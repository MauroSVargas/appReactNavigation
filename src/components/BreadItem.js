import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BreadItem = ({ item, onSelected}) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)} >
        <View style={styles.BreadItem}>
            <Text style={styles.title}>{item.name}</Text>
            <></>
            <Text style={styles.detalles}>{item.price}</Text>
            <Text style={styles.detalles}>{item.weight}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    BreadItem: {
        padding:20,
        margin:10,
        borderRadius:3,
        color: '#cca'
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold'
    },
    detalles:{
        fontSize: 18
    }
})

export default BreadItem;