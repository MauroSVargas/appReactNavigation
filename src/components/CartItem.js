import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';


const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.title}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text>Cantidad: {item.quantity}</Text>
                    <Text>{item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item)}>
                <Ionicons name="trash-outline" size={24} color={Colors.secondary} />
            </TouchableOpacity>
            </View>
        </View>
      )
    }

export default CartItem

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor: '#ccc'
    },
    header:{
        fontSize:18,
        fontFamily: 'OpenSans_700Bold',
    },
    detail:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize:16,
        fontFamily:'OpenSans_400Regular'
    }

})