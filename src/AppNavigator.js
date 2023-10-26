import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './pages/LoadingScreen';

const AppNavigator = createStackNavigator(
  {
  Loading: {
    screen: LoadingScreen,
    navigationOptions: {
      headerShown: false, // Para ocultar o cabeçalho
    },
  },
});

export default createAppContainer(AppNavigator);