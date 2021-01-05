import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Text,
  ActivityIndicator,
} from 'react-native';

import {connect} from 'react-redux';

import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario,
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {
  _cadastraUsuario() {
    const {nome, email, senha} = this.props;

    this.props.cadastraUsuario({nome, email, senha});
  }

  renderBtnCadastro() {
    if (this.props.loading_cadastro) {
      return <ActivityIndicator size="large" color="#fff" />;
    }

    return (
      <Button
        title="Cadastrar"
        color="#115e54"
        onPress={() => this._cadastraUsuario()}
      />
    );
  }

  render() {
    return (
      <ImageBackground
        style={estilos.imagem}
        source={require('../images/bg.png')}>
        <View style={estilos.tela}>
          <View style={estilos.areaFormulario}>
            <TextInput
              value={this.props.nome}
              style={estilos.campoTexto}
              placeholder="Nome"
              placeholderTextColor="#fff"
              onChangeText={(texto) => this.props.modificaNome(texto)}
            />
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
            <Text style={estilos.msgErro}>{this.props.erroCadastro}</Text>
          </View>
          <View style={estilos.areaBotao}>{this.renderBtnCadastro()}</View>
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
  areaFormulario: {
    flex: 4,
    justifyContent: 'center',
  },
  campoTexto: {
    fontSize: 20,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#0a9',
  },
  areaBotao: {
    flex: 1,
  },
  msgErro: {
    color: '#f00',
    fontSize: 18,
  },
});

const mapStateToProps = (state) => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroCadastro: state.AutenticacaoReducer.erroCadastro,
  loading_cadastro: state.AutenticacaoReducer.loading_cadastro,
});

export default connect(mapStateToProps, {
  modificaNome,
  modificaEmail,
  modificaSenha,
  cadastraUsuario,
})(formCadastro);
