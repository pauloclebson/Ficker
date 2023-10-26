import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login'); // Navega para a próxima tela após 5 segundos
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
      source={require("../../assets/logomarca-p.png")}
      />
      <Text style={styles.textLogo}>FickeR</Text>

      <Text>Loading...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FA8072",
  },
  textLogo:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});
