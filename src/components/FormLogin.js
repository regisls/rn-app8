import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
} from '../actions/AutenticacaoActions';

class formLogin extends Component {
  _autenticarUsuario() {
    const {email, senha} = this.props;

    this.props.autenticarUsuario({email, senha});
  }

  renderBtnAcessar() {
    if (this.props.loading_login) {
      return <ActivityIndicator size="large" color="#fff" />;
    }
    return (
      <Button
        title="Acessar"
        color="#115e54"
        onPress={() => this._autenticarUsuario()}
      />
    );
  }

  render() {
    return (
      <ImageBackground
        style={estilos.imagem}
        source={require('../images/bg.png')}>
        <View style={estilos.tela}>
          <View style={estilos.areaTitulo}>
            <Text style={estilos.textoTitulo}>WhatsApp Clone</Text>
          </View>
          <View style={estilos.areaFormulario}>
            <TextInput
              value={this.props.email}
              style={estilos.campoTexto}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              onChangeText={(texto) => this.props.modificaEmail(texto)}
            />
            <TextInput
              value={this.props.senha}
              style={estilos.campoTexto}
              placeholder="Senha"
              placeholderTextColor="#fff"
              onChangeText={(texto) => this.props.modificaSenha(texto)}
              secureTextEntry
            />
            <Text style={estilos.msgErro}>{this.props.erroLogin}</Text>
            <TouchableHighlight onPress={() => Actions.frmCadastro()}>
              <Text style={estilos.textoCadastro}>
                Ainda não tem cadastro? Cadastre-se
              </Text>
            </TouchableHighlight>
          </View>
          <View style={estilos.areaBotao}>{this.renderBtnAcessar()}</View>
        </View>
      </ImageBackground>
    );
  }
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 10,
  },
  imagem: {
    flex: 1,
    width: null,
  },
  areaTitulo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoTitulo: {
    fontSize: 25,
  },
  areaFormulario: {
    flex: 2,
  },
  campoTexto: {
    fontSize: 20,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#0a9',
  },
  textoCadastro: {
    fontSize: 18,
    color: '#fff',
  },
  areaBotao: {
    flex: 2,
  },
  msgErro: {
    color: '#f00',
    fontSize: 18,
  },
});

const mapStateToProps = (state) => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin,
  loading_login: state.AutenticacaoReducer.loading_login,
});

export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
})(formLogin);
