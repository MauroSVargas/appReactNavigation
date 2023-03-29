import React from 'react';
import { FlatList } from 'react-native';
import GridItem from '../components/GridItem'

import { useSelector,useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'

const CategoriesScreen = ({ navigation }) => {

  const categories = useSelector(state=>state.categories.categories)
    const dispatch = useDispatch()

    const onHandleSelectedCategory = (item) => {
      dispatch(selectCategory(item.id))
         navigation.navigate('Breads',{
            categoryId: item.id,
            name: item.title,
        }) 
       // navigation.push("Breads",{name:item.title})
  }

  const renderGridItem = ({item}) =>{
      return(
          <GridItem item={item} onSelected={onHandleSelectedCategory} />
      )
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2} />
  )
};

export default CategoriesScreen