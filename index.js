/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/screens/App';
import {name as appName} from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);