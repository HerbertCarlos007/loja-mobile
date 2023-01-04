import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
        <Text>Hello World</Text>
    </View>
  );
}