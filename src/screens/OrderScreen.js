import React from 'react'
import { FlatList, View } from 'react-native'
import { ORDERS } from '../data/orders'
import OrderItems from '../components/OrderItems'

const OrderScreen = () => {

    const onHandleDeleteOrder = ()=>console.log("Elimina órden")

    const renderOrdersItem = ({item}) =>(
        <OrderItems
            item={item}
            onDelete={onHandleDeleteOrder}
        />
    )

  return (
    <View>
      <FlatList 
        data={ORDERS}
        renderItem={renderOrdersItem}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default OrderScreen

