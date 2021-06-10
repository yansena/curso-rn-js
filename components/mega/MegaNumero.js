import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

export default ({num}) => {
    return (
        <View style={styles.container} >
            <Text style={styles.num} >
                { num }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    num: {
        color: '#FFF'
    }
})

