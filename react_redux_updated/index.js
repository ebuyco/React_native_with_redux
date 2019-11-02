// import {AppRegistry} from 'react-native';
// import App from './src/components/App_basic';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import App from './src/components/App_basic';
import {name as appName} from './app.json';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build(require('./src/configs/theme'));

import './src/configs/env';

AppRegistry.registerComponent(appName, () => App);
