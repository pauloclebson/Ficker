import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Nome do Usuário'); // Nome já preenchido
  const [email, setEmail] = useState('usuario@email.com'); // Email já preenchido
  const [newPassword, setNewPassword] = useState('');

  const handleSaveButtonPress = () => {
    // Aqui você pode processar e salvar as informações atualizadas
    const updatedProfile = {
      name,
      email,
      newPassword,
    };
    console.log('Informações atualizadas:', updatedProfile);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveButtonPress}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E32D40',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#FF6347',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditProfileScreen;
