import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const BankInfoScreen = ({ navigation }) => {
  const [bankName, setBankName] = useState('');
  const [userName, setUserName] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const handleSaveButtonPress = () => {
    // Aqui você pode processar e salvar as informações do banco
    const bankInfo = {
      bankName,
      userName,
      creditCard,
    };
    console.log('Informações bancárias salvas:', bankInfo);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Inserir dados do banco Nubank</Text>

      <View style={styles.cardContainer}>
        <View style={styles.cardItem}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/image-133x.png')}
            />
          </View>
        </View>
        <View style={styles.cardItem}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/downloadremovebgpreview-13x.png')}
            />
          </View>
        </View>
        <View style={styles.cardItem}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/image-143x.png')}
            />
          </View>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Número do cartão"
        value={bankName}
        onChangeText={(text) => setBankName(text)}
      />

      <View style={styles.inlineInputs}>
      <TextInput
        style={[styles.input, styles.smallInput]}
        placeholder="Data de Validade"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />

      <TextInput
        style={[styles.input, styles.smallInput]}
        placeholder="CVV"
        value={creditCard}
        onChangeText={(text) => setCreditCard(text)}
      />
      </View>


      <TouchableOpacity style={styles.button} onPress={handleSaveButtonPress}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#E32D40',
    marginBottom: 10,
    marginTop: 80,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardItem: {
    alignItems: 'center',
  },
  cardImageContainer: {
    width: 100,
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 30,
    height: 30,
  },
  cardName: {
    marginTop: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
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
  smallInput: {
    width: '48%', // Define a largura desejada para os TextInput
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
});

export default BankInfoScreen;