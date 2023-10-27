import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const AppLandingPage = ({ navigation }) => {
  const handleLoginButtonPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupButtonPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logomarca-para-um-aplicativo-de-rastreamento-de-despesas-em-png--usando-a-cor-vermelho-como-principal-a-logomarca-deve-conter-um-cofrinho-de-porco-feliz-com-um---desenhado-em-seu-corpo-12.png")}
          />
          <Text style={styles.appName}>Ficker</Text>
        </View>
      </View>

      <View style={styles.graySquare}>
        <Image
          style={styles.imageInSquare}
          source={require("../../assets/manage-moneypana-11.png")}
        />
        <Text style={styles.squareText}>
          Assuma o controle de suas finanças com o Ficker, a solução completa para gerenciar suas despesas.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLoginButtonPress}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleSignupButtonPress}>
            <Text style={styles.buttonText2}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContentContainer}>
        <View style={styles.bottomImageContainer}>
          <Image
            style={styles.bottomImage}
            source={require("../../assets/financial-databro.png")}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            Obtenha informações valiosas sobre sua saúde financeira com os recursos abrangentes de relatórios.
          </Text>
        </View>
      </View>

      <View style={styles.bottomContentContainer}>
        <View style={styles.bottomImageContainer}>
          <Image
            style={styles.bottomImage}
            source={require("../../assets/piggy-bankbro-1.png")}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            Planeje e alcance suas metas financeiras com facilidade.
          </Text>
        </View>
      </View>

      <View style={styles.bottomContentContainer}>
        <View style={styles.bottomImageContainer}>
          <Image
            style={styles.bottomImage}
            source={require("../../assets/revenuebro.png")}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            Acompanhe seus ganhos e tome as rédeas do seu futuro.
          </Text>
        </View>
      </View>

      <View style={styles.bottomContentContainer}>
        <View style={styles.bottomImageContainer}>
          <Image
            style={styles.bottomImage}
            source={require("../../assets/walletbro-13x.png")}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            Assuma o controle de seus gastos e fique por dentro do seu orçamento.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 52,
    height: 52,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E32D40',
    marginLeft: 10,
  },
  graySquare: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    padding: 20,
  },
  imageInSquare: {
    width: 340,
    height: 220,
  },
  squareText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FF6347',
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 10,
  },
  signupButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText2: {
    color: '#E32D40',
    fontSize: 16,
  },
  bottomContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  bottomImageContainer: {
    flex: 1,
  },
  bottomImage: {
    width: 130,
    height: 140,
  },
  bottomTextContainer: {
    flex: 2,
    marginLeft: 15,
  },
  bottomText: {
    fontSize: 18, // Aumenta o tamanho do texto
  },
});

export default AppLandingPage;
