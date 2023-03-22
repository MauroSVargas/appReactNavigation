import React from 'react'
import { FlatList } from 'react-native'
import { BREADS } from '../data/breads'
import BreadItem from '../components/BreadItem'


const CategoryBreadScreen = ({navigation, route}) => {

    const {categoryId} = route.params

    const breads = BREADS.filter(bread => bread.category === categoryId);

    const handleSelected = (item) => {
        navigation.navigate ('Detalles', {
            bread: item
        })
    }

    const RenderBreadItem= ({item}) => (
        <BreadItem item={item} onSelected={handleSelected}/>
    )
        
    return (
        <FlatList
        data={breads}
        keyExtractor= {item => item.id}
        renderItem= {RenderBreadItem}
        />    
    )
}

export default CategoryBreadScreen

