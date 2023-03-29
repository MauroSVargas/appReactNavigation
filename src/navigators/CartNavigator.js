import { Platform } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen'
import { Colors } from '../constants/Colors'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ title: 'carrito' }}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator

