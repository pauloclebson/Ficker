import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoadingScreen({ navigation }){

  const handleConnectButtonPress = async () => {
    await navigation.navigate('BankInformation'); // Navegar para a tela de cadastro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conecte suas contas do banco.</Text>
      <Text style={styles.paragraph}>
        Obtenha uma visão completa de suas finanças com todas as suas contas em um só lugar.
      </Text>
      <Image
        style={styles.image}
        source={require('../../assets/image.png')} // Substitua 'sua-imagem.png' pelo nome da sua imagem
      />
      <TouchableOpacity style={styles.button} onPress={handleConnectButtonPress}>
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    color: '#E32D40', // Cor desejada
    marginBottom: 10, // Espaço abaixo do título
  },
  paragraph: {
    fontSize: 24,
    color: 'black', // Cor do texto do parágrafo
    textAlign: 'left', // Texto centralizado
    margin: 20, // Espaço em torno do parágrafo
  },
  image: {
    width: 200, // Largura da imagem
    height: 200, // Altura da imagem
    margin: 20, // Espaço abaixo da imagem
  },
  button: {
    backgroundColor: '#FF6347', // Cor do botão
    width: 200, // Largura do botão
    height: 40, // Altura do botão
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
