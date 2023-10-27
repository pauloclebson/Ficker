import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { styles } from '../GlobalStyle';


export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('EditProfile'); // Navega para a próxima tela após 5 segundos
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
      source={require("../../assets/logomarca-p.png")}
      />
      <Text style={styles.textLogo}>FickeR</Text>

      <Text>Carregando...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}


