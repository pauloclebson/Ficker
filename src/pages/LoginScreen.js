import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { auth } from '../Firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirecionar para a próxima tela após o login bem-sucedido
      alert('Login efetuado');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignupButtonPress = async () => {
    await navigation.navigate('Signup'); // Navegar para a tela de cadastro
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/logomarca-p.png")}
          style={styles.image}
        />
        <Text style={styles.textLogo}>FickeR</Text>
      </View>

      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        keyboardType='email-address'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem uma conta?</Text>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignupButtonPress}>
          <Text style={styles.signupButtonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24, // Aumenta o tamanho do título
    fontWeight: 'bold',
    color: "black",
    padding: 5,
    margin: 5,
  },
  image: {
    marginTop: -100, // Move o logotipo para cima
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  textLogo: {
    fontSize: 40, // Aumenta o tamanho do nome "FickeR"
    fontWeight: 'bold',
    color: "#E32D40", // Define a cor desejada
  },
  button: {
    backgroundColor: "#FF6347",
    padding: 15, // Aumenta o tamanho do botão
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    color: 'black',
  },
  signupButton: {
    marginLeft: 5, // Separa o botão de cadastro do texto
  },
  signupButtonText: {
    color: "#E32D40", // Define a cor desejada para o botão de cadastro
  },
});

export default LoginScreen;
