import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const SelectAccountScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [banks, setBanks] = useState([
    { name: 'Banco 1', checked: false },
    { name: 'Banco 2', checked: false },
    { name: 'Banco 3', checked: false },
    // Adicione mais bancos conforme necessário
  ]);

  const handleConnectButtonPress = () => {
    // Adicione aqui a ação desejada ao pressionar o botão "Conectar Conta"
    // Você pode acessar os bancos selecionados e fazer o que for necessário
    const selectedBanks = banks.filter((bank) => bank.checked);
    console.log('Bancos selecionados:', selectedBanks);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conectar Conta Bancária</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Pesquisar bancos..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      {banks.map((bank, index) => (
        <View key={index} style={styles.bankItem}>
          <CheckBox
            value={bank.checked}
            onValueChange={(newValue) => {
              const updatedBanks = [...banks];
              updatedBanks[index].checked = newValue;
              setBanks(updatedBanks);
            }}
          />
          <Text style={styles.bankName}>{bank.name}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleConnectButtonPress}>
        <Text style={styles.buttonText}>Conectar Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E32D40',
    marginBottom: 10,
  },
  searchBox: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bankName: {
    marginLeft: 10,
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

export default SelectAccountScreen;
