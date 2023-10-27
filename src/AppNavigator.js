import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './pages/LoadingScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import HomeScreen from './pages/HomeScreen';

const AppNavigator = createStackNavigator({
  Loading: {
    screen: LoadingScreen,
    navigationOptions: {
      headerShown: false, // Para ocultar o cabeçalho
    },
  },
  Login:{
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Signup:{
    screen: SignupScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home:{
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);