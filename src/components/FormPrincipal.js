import * as React from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

const conversas = () => <Conversas />;
const contatos = () => <Contatos />;

const initialLayout = {width: Dimensions.get('window').width};

export default function FormPrincipal() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Conversas'},
    {key: 'second', title: 'Contatos'},
  ]);

  const renderScene = SceneMap({
    first: conversas,
    second: contatos,
  });

  const renderHeader = (props) => <TabBarMenu {...props} />;

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderHeader}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
