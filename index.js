/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppLoggedIn from './src/AppBeforeLogin';

AppRegistry.registerComponent(appName, () => AppLoggedIn);
