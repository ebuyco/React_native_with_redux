/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build(require('./src/configs/theme'));
AppRegistry.registerComponent(appName, () => App);
