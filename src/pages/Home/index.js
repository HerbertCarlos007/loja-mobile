import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { Header } from '../../components/Header'
import { ListProducts } from '../../components/ListProducts'

const products = [
  {
      id: '',
      name: 'Calça Jeans',
      price: 22.50,
  },

  {
      id: '2',
      name: 'Moletom',
      price: 50.25,
  },

  {
      id: '3',
      name: 'Bermuda',
      price: 35.10,
  },
]

export function Home() {
  return (
    <View >
        <Header/>
        <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>  <ListProducts data={item}/>}
            />
    </View>
  );
}