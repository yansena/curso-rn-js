import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import MegaNumero from './MegaNumero';

// import { Container } from './styles';

export default class Mega extends Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: [ ]
    }

   
    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = num => {
        const novo = parseInt(Math.random() * 60) + 1
        return num.includes(novo) ? this.gerarNumeroNaoContido(num) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
        .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = ( ) => {
        const nums = this.state.numeros
        return nums.map( num => {
            return <MegaNumero num={num} />
        })
    }
    render(){
        return(
            <>
                <Text>
                    Gerador Mega Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Numeros"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{ 
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                    }}>
                    { this.exibirNumeros() }
                </View>
            </>
        )
    }

}