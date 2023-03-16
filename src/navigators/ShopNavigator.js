import React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailsScreen from '../screens/BreadDetailsScreen'

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
  return (
    <NavigationContainer style={styles.screen}>
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={CategoriesScreen}/>
            <Stack.Screen name="Productos" component={CategoryBreadScreen}/>
            <Stack.Screen name="Detalles" component={BreadDetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignContent: 'center',
        justifyContent:'center'
    }
})
