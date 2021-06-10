import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DigiteSeuNome } from './components/DigiteSeuNome';
import FlexBoxV1 from './components/layout/FlexboxV1';
import FlexBoxV2 from './components/layout/FlexboxV2';
import FlexBoxV3 from './components/layout/FlexboxV3';
import FlexBoxV4 from './components/layout/FlexboxV4';
import { Quadrado } from './components/layout/Quadrado';
import Mega from './components/mega/Mega';

export default function App() {
  return (
    <View style={styles.container}>
      <Mega qtdeNumeros={5}/>
      {/* 
      <FlexBoxV4/>
      <FlexBoxV3/>
      <FlexBoxV2/>
      <FlexBoxV1/>
      <DigiteSeuNome/> 
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
