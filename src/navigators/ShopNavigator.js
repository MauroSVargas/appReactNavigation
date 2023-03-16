import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailsScreen from '../screens/BreadDetailsScreen'

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={CategoriesScreen}/>
            <Stack.Screen name="CategoriaBread" component={CategoryBreadScreen}/>
            <Stack.Screen name="Detalles" component={BreadDetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator
