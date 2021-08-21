import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [timer, setTimer] = useState(0);
  const [verificarTimer, setVerificarTimer] = useState(null);
  const [contar, setContar] = useState('VAI');
  const [ultimo, setUltimo] = useState(null);

  const imagem = require('./assets/cronometro.png');
  const marcador = ultimo > 0 ? 'Ultimo tempo: '+ ultimo.toFixed(2) + 's' : '';

  function vai() {

    if (verificarTimer != null) {
      clearInterval(verificarTimer);
      setVerificarTimer(null);
      setContar('VAI');
    } else {
      setVerificarTimer(setInterval(() => {
        setTimer(timer => timer + 0.1)
      }, 100));
      setContar('PARAR');
    }
  }

  function limpar() {
    if (verificarTimer != null) {
      clearInterval(verificarTimer);
      setVerificarTimer(null);
      setContar('VAI');
    }
    setUltimo(timer);
    setTimer(0);
  };

  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.cronometro} />
      <Text style={styles.timer}>{timer.toFixed(1)}</Text>
      <View style={styles.boxBtn}>
        <TouchableOpacity style={styles.btn} onPress={vai}><Text style={styles.btnTexto}>{contar}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limpar}><Text style={styles.btnTexto}>LIMPAR</Text></TouchableOpacity>
      </View>
      <View style={styles.boxUltimo}>
        <Text style={styles.ultimo}>
          {marcador}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    color: "#FFF",
    fontSize: 50,
    marginTop: -150,
    fontWeight: 'bold'
  },
  boxBtn: {
    flexDirection: 'row',
    marginTop: 100,
    height: 40,
  },
  btn: {
    flex: 1,
    backgroundColor: "#FFF",
    height: 40,
    margin: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  btnTexto: {
    color: '#00aeef',
    fontSize: 17,
    fontWeight: 'bold'
  },
  boxUltimo: {
    marginTop: 45,
  },
  ultimo: {
    fontSize: 25,
    color: '#FFF',
    fontStyle: 'italic'
  }

});
