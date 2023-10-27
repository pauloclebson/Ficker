import { View, Text, Image} from 'react-native';
import { styles } from '../GlobalStyle';

export default function LoadingScreen({ navigation }){

return (
    <View style={styles.container}>
      <Image 
      source={require("../../assets/logomarca-p.png")}
      />
      <Text style={styles.textLogo}>FickeR</Text>

      <Text>Bem Vindo!</Text>
    </View>
  );
}