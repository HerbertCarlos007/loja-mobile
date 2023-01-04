import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';



export function ListProducts({ data }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>{data.name}</Text>
                <Text>{data.price}</Text>
            </View>
        </View>
    );
}