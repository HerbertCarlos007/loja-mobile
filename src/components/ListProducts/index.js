import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';



export function ListProducts({ data }) {
    return (
        <View style={styles.container}>
            <Text>{data.name}</Text>
            <Text>{data.price}</Text>
        </View>
    );
}