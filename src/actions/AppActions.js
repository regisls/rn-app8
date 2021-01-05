import {MODIFICA_ADICIONA_CONTATO_EMAIL} from './types';

export const modificadicionaContatoEmail = (texto) => {
  return {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto,
  };
};

export const adicionaContato = (email) => {
  return {
    type: '',
  };
};
