import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import Application from './screens/Application';

const mainNavigator = createStackNavigator({
  Main: {
    screen: Main,
  },
});

const modalNavigator = createStackNavigator(
  {
    mainNavigator,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      App: Application,
      modalNavigator,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

export default Routes;
