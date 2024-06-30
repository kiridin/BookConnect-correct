// Ciencia.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Ciencia() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Realidade Oculta", author: "Brian Greene", synopsis: "Uma exploração das teorias da física moderna que sugerem a existência de universos paralelos e a natureza fundamental da realidade.", image: require('../../../assets/capas/Ciencia/A_Realidade_Oculta.png') },
        { id: 2, title: "Armas, Germes e Aço", author: "Jared Diamond", synopsis: "Um estudo sobre como fatores ambientais e geográficos influenciaram o desenvolvimento das sociedades humanas ao longo da história.", image: require('../../../assets/capas/Ciencia/Armas,_Germes_e_Aço.png') },
        { id: 3, title: "Cosmos", author: "Carl Sagan", synopsis: "Uma exploração do universo e da evolução da vida, com uma visão ampla sobre a ciência e a nossa compreensão do cosmos.", image: require('../../../assets/capas/Ciencia/Cosmos.png') },
        { id: 4, title: "Inteligência Artificial", author: "Stuart Russell e Peter Norvig", synopsis: "Um dos principais textos sobre IA, abordando os fundamentos, algoritmos e aplicações da inteligência artificial na ciência e na tecnologia.", image: require('../../../assets/capas/Ciencia/Inteligência_Artificial.png') },
        { id: 5, title: "O Código da Vida", author: "Matt Ridley", synopsis: "Uma análise das descobertas genéticas e seu impacto na compreensão da vida, saúde e comportamento humano.", image: require('../../../assets/capas/Ciencia/O_Código_da_Vida.png') },
        { id: 6, title: "O Universo Numa Casca de Noz", author: "Stephen Hawking", synopsis: "Uma continuação de 'Uma Breve História do Tempo', explorando conceitos avançados da física teórica e cosmologia.", image: require('../../../assets/capas/Ciencia/O_Universo_Numa_Casca_de_Noz.png') },
        { id: 7, title: "The Innovators", author: "Walter Isaacson", synopsis: "A história das pessoas que criaram o computador e a internet, explorando suas inovações e colaborações que moldaram a era digital.", image: require('../../../assets/capas/Ciencia/The_Innovators.png') },
        { id: 8, title: "Uma Breve História do Tempo", author: "Stephen Hawking", synopsis: "Uma introdução às teorias do universo, abordando conceitos como buracos negros, a teoria da relatividade e a origem do cosmos.", image: require('../../../assets/capas/Ciencia/Uma_Breve_História_do_Tempo.png') }
      ];

      console.log('Loaded images:', imageInfo); // Debug log
      setImages(imageInfo);
    };

    loadImages();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.categoryTitle}>Ciência</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.imageContainer}>
          {images.map((book, index) => (
            <TouchableOpacity key={index} style={styles.bookContainer} onPress={() => navigation.navigate('BookDetails', { book })}>
              <Image source={book.image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBDACC',
  },
  scrollView: {
    padding: 10,
    backgroundColor: '#EBDACC',
  },
  header: {
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#4b3832',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 70,
    padding: 3,
  },
  line: {
    height: 3,
    backgroundColor: '#4b3832',
    alignSelf: 'flex-start',
    width: '19%', // Ensures the line is as long as the text
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    width: screenWidth / 3 - 40,
    height: (screenWidth / 3 - 40) * 1.5,
    borderRadius: 10,
  },
  bookContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8, // Sombra mais destacada
    backgroundColor: '#FFF', // Fundo branco para destacar a sombra
    borderRadius: 15,
    padding: 10,
    margin: 5, // Adjust the margin to provide spacing between books
  },
});