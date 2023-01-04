import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { styles } from './styles';

export function Header() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <Text style={styles.storeName}>Store</Text>
        </View>
    );
}