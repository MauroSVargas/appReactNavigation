import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import OrderScreen from '../screens/OrderScreen';

const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName='Shop-tab'
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
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <FontAwesome name="shopping-bag" size={24} color="black" />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Tienda</Text>
            </View>
          )
        }}
      />

      <BottomTabs.Screen
        name="cart-tab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <FontAwesome name="shopping-cart" size={24} color="black" />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Carrito</Text>
            </View>
          )
        }}
      />

      <BottomTabs.Screen
        name="Orders-tab"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <MaterialIcons name="list-alt" size={24} color="black" />
              <Text style={{ color: focused ? '#7F5DF0' : '#748C94' }}>Ordenes</Text>
            </View>
          )
        }}
      />

    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})