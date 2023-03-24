import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/categories';
import GridItem from '../components/GridItem'


const CategoriesScreen = ({ navigation }) => {

  const onSelectedItem = (item) => {
    navigation.navigate('Productos', {
      categoryId: item.id,
      categoryName: item.title,
    });
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={onSelectedItem} />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2} />
  )
};

export default CategoriesScreen