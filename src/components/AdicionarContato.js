import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
  modificadicionaContatoEmail,
  adicionaContato,
} from '../actions/AppActions';

const AdicionarContato = (props) => (
  <View style={estilos.componente}>
    <View style={estilos.areaInput}>
      <TextInput
        placeholder="E-mail"
        style={estilos.input}
        onChangeText={(texto) => props.modificadicionaContatoEmail(texto)}
        value={props.adiciona_contato_email}
      />
    </View>
    <View style={estilos.areaBotao}>
      <Button
        title="Adicionar"
        color="#115e54"
        onPress={() => props.adicionaContato(props.adiciona_contato_email)}
      />
    </View>
  </View>
);

const estilos = StyleSheet.create({
  componente: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  areaInput: {
    flex: 1,
    justifyContent: 'center',
  },
  areaBotao: {
    flex: 1,
  },
  input: {
    fontSize: 20,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#115e54',
  },
});

const mapStateToProps = (state) => ({
  adiciona_contato_email: state.AppReducer.adiciona_contato_email,
});

export default connect(mapStateToProps, {
  modificadicionaContatoEmail,
  adicionaContato,
})(AdicionarContato);
