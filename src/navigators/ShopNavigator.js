import React from 'react'
import { Platform, StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailsScreen from '../screens/BreadDetailsScreen'
import { Colors } from '../constants/Colors'

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
  return (
    <NavigationContainer style={styles.screen}>
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
