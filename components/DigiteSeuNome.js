import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';


export function DigiteSeuNome() {
    const [ nome, setNome ] = useState('Teste');

    return(
        <SafeAreaView>
            <Text>
                { nome }
            </Text>
            <TextInput 
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </SafeAreaView>
    );
}