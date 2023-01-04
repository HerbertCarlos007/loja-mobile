import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../../components/Header'

export function Home() {
  return (
    <View >
        <Header/>
        <Text>Página Home!</Text>
    </View>
  );
}