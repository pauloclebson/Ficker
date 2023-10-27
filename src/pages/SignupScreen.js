import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { auth } from '../Firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirecionar para a próxima tela após o cadastro bem-sucedido
      alert('Cadastro efetuado');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginButtonPress = () => {
    navigation.navigate('Login'); // Navegar para a tela de login
  };

  const handleLogoPress = () => {
    navigation.navigate('Landing'); // Navegar para a tela de aterrissagem
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleLogoPress}>
          <Image
            source={require("../../assets/logomarca-p.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.textLogo}>FickeR</Text>
      </View>

      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        keyboardType='email-address'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Já possui uma conta?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginButtonPress}>
          <Text style={styles.loginButtonText}>Faça login</Text>
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
    backgroundColor: 'white', // Fundo branco
  },
  image: {
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "black",
    marginBottom: 20,
  },
  textLogo: {
    fontSize: 40, // Aumenta o tamanho do nome "FickeR"
    fontWeight: 'bold',
    color: "#E32D40", // Define a cor desejada
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: 'black',
  },
  loginButton: {
    marginLeft: 5, // Separa o botão de cadastro do texto
  },
  loginButtonText: {
    color: "#E32D40", // Define a cor desejada para o botão de cadastro
  },
});

export default SignupScreen;
