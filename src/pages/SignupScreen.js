import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { auth } from '../Firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { styles } from '../GlobalStyle';


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
              <View>
            <Image 
            source={require("../../assets/logomarca-p.png")}
             />
             <Text style={styles.textLogo01}>FickeR</Text>
        </View>
      <Text style={styles.formTitle}>Novo Usuário</Text>
      <TextInput
        placeholder="exemplo@gmail.com"
        value={email}
        keyboardType='email-address'
        onChangeText={setEmail}
        style={styles.formInput}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.formInput}
      />
      <TextInput
        placeholder="Confirme a Senha"
        value={repassword}
        onChangeText={setRePassword}
        secureTextEntry
        style={styles.formInput}
      />
      <Pressable style={styles.formButton} onPress={handleSignup}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </Pressable>
    </View>
  );
};


export default SignupScreen;