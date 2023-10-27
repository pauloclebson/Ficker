import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image} from 'react-native';
import { auth } from '../Firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from '../GlobalStyle';


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
        <View>
            <Image 
            source={require("../../assets/logomarca-p.png")}
             />
             <Text style={styles.textLogo01}>FickeR</Text>
        </View>
        <Text style={styles.formTitle}>Login</Text>
        <TextInput
            placeholder="Email"
            keyboardType='email-address'
            autoCapitalize='none'
            autoComplete='email'
            value={email}
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
        <Pressable style={styles.formButton} onPress={handleLogin}>
            <Text style={styles.textButton}>Logar</Text>
        </Pressable>
        <View style={styles.subContainer}>
            <Pressable style={styles.subButton}>
                <Text style={styles.subTextButton}>Esqueci a Senha</Text>
            </Pressable>
            <Pressable style={styles.subButton} onPress={handleSignupButtonPress}>
                <Text style={styles.subTextButton}>Novo Usuário</Text>
            </Pressable>
        </View>
    </View>
  );
};


export default LoginScreen;