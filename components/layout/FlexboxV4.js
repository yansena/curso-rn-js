import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Quadrado } from './Quadrado';

// import { Container } from './styles';


const FlexBoxV4 = () => {
    
    return(
        <View style={styles.FlexVw}>
            <View style={ styles.v1 }/>
            <View style={ styles.v2 }/>
            <View style={ styles.v3 }/>
        </View>
    );
}
const styles = StyleSheet.create({
    FlexVw: {
        flex: 1,
        width: 100,
        backgroundColor: '#000'
    },
    v1: {
        backgroundColor: '#36c9a7',
        height: 300
    },
    v2: {
        backgroundColor: '#ff801a',
        flex: 3
    },
    v3: {
        backgroundColor: '#dd22c1',
        flex: 1
    },
})
export default FlexBoxV4;