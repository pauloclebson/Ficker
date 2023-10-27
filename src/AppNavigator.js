import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './pages/LoadingScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import LandingScreen from './pages/LandingScreen';
import HomeScreen from './pages/HomeScreen';
import SelectAccountScreen from './pages/SelectAccountScreen';
import BankInformationScreen from './pages/BankInformationScreen';
import EditAccountScreen from './pages/EditAccountScreen';
import EditProfileScreen from './pages/EditProfileScreen';

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
  Landing:{
    screen: LandingScreen,
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
  // SelectAccount:{
  //   screen: SelectAccountScreen,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
  BankInformation:{
    screen: BankInformationScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditAccount:{
    screen: EditAccountScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditProfile:{
    screen: EditProfileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);