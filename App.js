import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './src/components/Routes';
import reducers from './src/reducers';

class App extends Component {
  constructor(props) {
    super(props);

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyDkQXfMlKr839469r9wdtN3x953Culyzuk',
      authDomain: 'whatsapp-clone-6bf6a.firebaseapp.com',
      projectId: 'whatsapp-clone-6bf6a',
      storageBucket: 'whatsapp-clone-6bf6a.appspot.com',
      messagingSenderId: '941599665196',
      appId: '1:941599665196:web:009d226e93df3151883589',
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
