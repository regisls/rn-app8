import React from 'react';
import {StyleSheet} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import BoasVindas from './BoasVindas';
import FormPrincipal from './FormPrincipal';
import AdicionarContato from './AdicionarContato';

export default (props) => (
  <Router>
    <Stack
      key="root"
      navigationBarStyle={estilos.barra}
      titleStyle={estilos.corTextoBarra}>
      <Scene
        key="frmLogin"
        component={FormLogin}
        title="Login"
        hideNavBar={true}
      />
      <Scene
        key="frmCadastro"
        component={FormCadastro}
        title="Cadastro"
        hideNavBar={false}
      />
      <Scene
        key="boasVindas"
        component={BoasVindas}
        title="Bem Vindo"
        hideNavBar={true}
      />
      <Scene
        key="frmPrincipal"
        component={FormPrincipal}
        title="WhatsApp"
        hideNavBar={true}
        initial
      />
      <Scene
        key="adicionarContato"
        component={AdicionarContato}
        title="Adicionar contato"
        hideNavBar={false}
      />
    </Stack>
  </Router>
);

const estilos = StyleSheet.create({
  barra: {
    backgroundColor: '#115E54',
  },
  corTextoBarra: {
    color: '#fff',
  },
});
