import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default (props) => (
  <ImageBackground
    style={estilos.background}
    source={require('../images/bg.png')}>
    <View style={estilos.areaTela}>
      <View style={estilos.areaLogo}>
        <Text>Seja bem vindo</Text>
        <Image source={require('../images/logo.png')} />
      </View>
      <View style={estilos.areaBotao}>
        <Button title="Fazer Login" onPress={() => Actions.frmLogin()} />
      </View>
    </View>
  </ImageBackground>
);

const estilos = StyleSheet.create({
  areaTela: {
    flex: 1,
    padding: 15,
  },
  background: {
    flex: 1,
    width: null,
  },
  areaLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaBotao: {
    flex: 1,
  },
});
