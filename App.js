import { Component } from 'react';
import { Alert, Image, Button, StyleSheet, TextInput, View } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: ' Informe seu nome'
    }
  }

  botaoCalcular = _ => {
    const { txtPeso, txtAltura } = this.state
    const peso = parseFloat(txtPeso)
    const altura = parseFloat(txtAltura)

    if (Number.isNaN(peso) || Number.isNaN(altura)) {
      Alert.alert("Erro, Preencha direito!")
      return
    }
    const imc = peso / altura ** 2
    let categoria = ""
    if (imc < 18.5) {
      categoria = "Capa do batman"
    }
    else if (imc < 25) {
      categoria = "Peso normal."
    }
    else if (imc < 30) {
      categoria = "Acima do peso"
    }
    else {
      categoria = "Obesidade"
    }

    const mensagem = `IMC = ${imc.toFixed(1)}\n${categoria}`
    Alert.alert("Ìndice de messa Corporal", mensagem)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Peso'
          style={styles.input}
          onChangeText={nome => this.setState({ nome })} />
        <TextInput
          placeholder='Altura'
          style={styles.input}
          onChangeText={nome => this.setState({ nome })} />
        <Button title='Calcular' onPress={this.botaoCalcular} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },

  input: {
    borderWidth: 0.5,
    paddingHorizontal: 5,
    marginBottom: 24,
    fontSize: 26
  }
})
