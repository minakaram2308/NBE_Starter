/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppProviders from './src/AppProviders';

AppRegistry.registerComponent(appName, () => AppProviders);
