import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Quadrado(props){
    const lado = 50;
    return(
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.color || '#000'
        }} />
    )
}