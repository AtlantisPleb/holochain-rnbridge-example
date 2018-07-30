import { AppRegistry, YellowBox } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Module MobileAppBridge requires main queue'
])

AppRegistry.registerComponent(appName, () => App)
