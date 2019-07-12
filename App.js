import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    }
  }
  
  jokenpo(escolhaUsuario) {

    // gera número aleatório (0, 1, 2)
    var numAleatorio = Math.floor(Math.random() * 3);
    
    var escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var reultado = '';

    if (escolhaComputador == 'pedra'){
      if (escolhaUsuario == 'pedra') {
        resultado = 'Empate';
      } else if (escolhaUsuario == 'papel') {
        resultado = 'Você Ganhou! _o/';
      } else if (escolhaUsuario == 'tesoura') {
        resultado = 'Perdeu :/';
      }
      
    } else if(escolhaComputador == 'papel') {

      if (escolhaUsuario == 'pedra') {
        resultado = 'Perdeu :/';
      } else if (escolhaUsuario == 'papel') {
        resultado = 'Empate';
      } else if (escolhaUsuario == 'tesoura') {
        resultado = 'Você Ganhou! _o/';
      }
      
    } else if (escolhaComputador == 'tesoura') {

      if (escolhaUsuario == 'pedra') {
        resultado = 'Você Ganhou! _o/';
      } else if (escolhaUsuario == 'papel') {
        resultado = 'Perdeu :/';
      } else if (escolhaUsuario == 'tesoura') {
        resultado = 'Empate';
      }

    }
    
    this.setState({
      escolhaUsuario : escolhaUsuario,
      escolhaComputador : escolhaComputador,
      resultado : resultado
    });
  
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.panelTopo}>
          <Image source={require('./assets/images/jokenpo.jpg')}/>
        </View>

        <View style={styles.panelActions}>
          <View style={styles.bt}>
            <Button title="pedra" onPress={ () => {this.jokenpo('pedra')} } ></Button>
          </View>
          <View style={styles.bt}>
            <Button title="papel" onPress={ () => {this.jokenpo('papel')} } ></Button>
          </View>
          <View style={styles.bt}>
            <Button title="tesoura" onPress={ () => {this.jokenpo('tesoura')} } ></Button>
          </View>
        </View>



        <Text style={styles.title}>JoKenPo!</Text>
        
        <Text style={styles.text}>Escolha do Computador: {this.state.escolhaComputador}</Text>
        <Text style={styles.text}>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
        <Text style={styles.result}>{this.state.resultado}</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#332615',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
  result: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 50,
    color: '#4472b9',
  },
  panelActions: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  bt: {
    width: 90,
  },
});
