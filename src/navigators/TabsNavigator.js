import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'; 


import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'

const BottomTabs= createBottomTabNavigator()

const TabsNavigator = () => {
    return ( 
    <BottomTabs.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}

    >
        <BottomTabs.Screen
            name="Shop-tab"
            component={ShopNavigator}
            options={{
                tabBarIcon: ({ focused}) => (
                    <View style={styles.tabBarIcon}>
                        <FontAwesome name="shopping-bag" size={24} color="black"/>
                        <Text>Tienda</Text>
                    </View>
                )
            }}
        />
        
        <BottomTabs.Screen
            name="cart-tab"
            component={CartNavigator}
            options={{
                tabBarIcon: ({ focused}) => (
                    <View style={styles.tabBarIcon}>
                        <FontAwesome name="shopping-cart" size={24} color="black"/>
                        <Text>Tienda</Text>
                    </View>
                )
            }}
        />
    </BottomTabs.Navigator>
    )
}

export default TabsNavigator

const styles = StyleSheet.create({
    tabBar:{
        shadowColor: '#7f5df0',
        shadowOffset: {width : 0, height : 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'relative',
        bottom: 25,
        borderRadius: 15,
        height: 90
    },
    tabBarIcon: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})