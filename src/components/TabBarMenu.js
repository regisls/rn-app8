import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {TabBar} from 'react-native-tab-view';

export default (props) => (
  <View style={estilos.topo}>
    <StatusBar backgroundColor="#114d44" />
    <View style={estilos.acoes}>
      <View style={estilos.titleBar}>
        <Text style={estilos.titulo}>WhatsApp Clone</Text>
      </View>
      <View style={estilos.botoes}>
        <View style={estilos.imagem}>
          <TouchableHighlight
            onPress={() => Actions.adicionarContato()}
            underlayColor="#114d44">
            <Image source={require('../images/adicionar_contato.png')} />
          </TouchableHighlight>
        </View>
        <View style={estilos.areaSair}>
          <Text style={estilos.sair}>Sair</Text>
        </View>
      </View>
    </View>
    <TabBar {...props} style={estilos.tabs} />
  </View>
);

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#115e54',
    elevation: 4,
    marginBottom: 6,
  },
  titleBar: {
    height: 50,
    justifyContent: 'center',
  },
  titulo: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 20,
  },
  tabs: {
    backgroundColor: '#115e54',
    elevation: 0,
  },
  imagem: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaSair: {
    justifyContent: 'center',
  },
  sair: {
    fontSize: 20,
    color: '#fff',
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botoes: {
    flexDirection: 'row',
    marginRight: 20,
  },
});
