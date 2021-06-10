import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Quadrado } from './Quadrado';

// import { Container } from './styles';


const FlexBoxV3 = () => {
    
    return(
        <>
            <View style={styles.FlexVw}>
                <Quadrado color='#ff801a'/>
                <Quadrado color='#50d1f6'/>
                <Quadrado color='#dd22c1'/>
                <Quadrado color='#8312ed'/>
                <Quadrado color='#36c9a7'/>
            </View>
            
        </>
    );
}
const styles = StyleSheet.create({
    FlexVw: {
        flexDirection: 'column',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})
export default FlexBoxV3;