import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../Firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth,email, password);
      // Redirecionar para a próxima tela após o login bem-sucedido
      alert('Login efetuado')
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
      <Text style={styles.header}>Login</Text>
      <TextInput
        placeholder="Email"
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <View>
        <Button title="Cadastrar" onPress={handleSignupButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;