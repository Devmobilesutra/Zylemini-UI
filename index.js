/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import {YellowBox} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
// import CreateNewOrderFirst from './Screens/CreateNewOrder/CreateNewOrderFirst';

// YellowBox.ignoreWarnings(['Warning: ...']);

// console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => CreateNewOrderFirst);
