import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailsScreen from '../screens/BreadDetailsScreen'
import { Colors } from '../constants/Colors'

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
  return (
        <Stack.Navigator 
        initialRouteName="Inicio"
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
          name="Inicio" 
          component={CategoriesScreen}
          options= {{
            title: 'MI PAN'
          }}
          />
            
          <Stack.Screen 
          name="Productos" 
          component={CategoryBreadScreen}
          options={({ route }) => ({
            title: route.params.name
          })}
          />
            
          <Stack.Screen 
          name="Detalles" 
          component={BreadDetailsScreen}
          />
        
        </Stack.Navigator>
  )
}

export default ShopNavigator

