import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Section = ({ icon, title, description }) => (
  <View style={styles.sectionContainer}>
    <View style={styles.iconWrapper}>
      <Image source={icon} style={styles.icon} />
    </View>
    <View style={styles.textWrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const UserProfileScreen = ({ navigation }) => {
  const sections = [
    {
      id: 1,
      icon: require('../../assets/image-153x.png'), // Substitua pelo caminho do ícone 1
      title: 'Usuário',
      description: 'Seu perfil de usuário.',
    },
    {
      id: 2,
      icon: require('../../assets/image-153x.png'), // Substitua pelo caminho do ícone 2
      title: 'Alertas',
    },
    {
      id: 3,
      icon: require('../../assets/image-153x.png'), // Substitua pelo caminho do ícone 3
      title: 'Segurança',
    },
    {
      id: 4,
      icon: require('../../assets/image-153x.png'), // Substitua pelo caminho do ícone 4
      title: 'Ajuda',
    },
    {
      id: 5,
      icon: require('../../assets/image-153x.png'), // Substitua pelo caminho do ícone 4
      title: 'Adicionar novo cartão',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {sections.map((section) => (
        <Section
          key={section.id}
          icon={section.icon}
          title={section.title}
          description={section.description}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    backgroundColor: 'white',
    padding: 20,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#E32D40', // Cor dos quadrados vermelhos
    padding: 10,
    borderRadius: 10,
  },
  iconWrapper: {
    width: 45, // Largura do espaço do ícone
    height: 45, // Altura do espaço do ícone
    backgroundColor: 'white', // Cor de fundo do espaço do ícone
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  icon: {
    width: 40, // Tamanho do ícone
    height: 40, // Tamanho do ícone
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Cor do título
  },
  description: {
    fontSize: 16,
    color: 'white', // Cor da descrição
  },
});

export default UserProfileScreen;


