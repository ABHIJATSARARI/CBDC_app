import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json'
import { Platform } from 'react-native';

AppRegistry.registerComponent(appName, () => App);
if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById(appName);
    AppRegistry.runApplication('appName', { rootTag });
}