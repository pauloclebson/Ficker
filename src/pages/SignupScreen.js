import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../Firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const handleSignup = async () => {
    if(email === '' || password === '' || repassword === ''){
      alert('Todos os campos devem ser preenchidos!')
    }
    if(password !== repassword){
      alert('As senhas não estão iguais!')
    }
    else{
      try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirecionar para a próxima tela após o cadastro bem-sucedido
      alert('Cadastro feito')
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>
      <TextInput
        placeholder="exemplo@gmail.com"
        value={email}
        keyboardType='email-address'
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
      <TextInput
        placeholder="Confirme a Senha"
        value={repassword}
        onChangeText={setRePassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
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

export default SignupScreen;