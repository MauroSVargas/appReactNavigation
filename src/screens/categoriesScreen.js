import React from 'react';
import { StyleSheet, FlatList} from 'react-native';
import { CATEGORIES } from '../data/categories';
import GridItem from '../components/GridItem'


const CategoriesScreen = ({navigation}) => {

  const onSelectedItem = (item) => { 
    navigation.navigate ('Productos', {
      categoryId: item.id,
      categoryName: item.title,
    });
  }

  const renderGridItem = ({item}) => (
    <GridItem item={item} onSelected={onSelectedItem}/>
  );

  return (
    <FlatList 
    data={CATEGORIES}
    keyExtractor={item => item.id}
    renderItem={renderGridItem}
    numColumns={2}/>
  )
};
  
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'grey'
    },
    text:{
        fontSize: 30,
        fontFamily: 'OpenSans_400Regular',
    }
})

export default CategoriesScreen