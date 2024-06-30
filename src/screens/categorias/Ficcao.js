// FiccaoCientifica.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function FiccaoCientifica() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "1984", author: "George Orwell", synopsis: "Em uma sociedade totalitária onde o Grande Irmão controla tudo, Winston Smith luta contra a opressão e busca a liberdade de pensamento.", image: require('../../../assets/capas/FiccaoCientifica/1984.png') },
        { id: 2, title: "A Mão Esquerda da Escuridão", author: "Ursula K. Le Guin", synopsis: "O emissário Genly Ai visita o planeta Gethen, onde os habitantes são andróginos, e precisa navegar pelas complexas culturas e políticas locais para cumprir sua missão diplomática.", image: require('../../../assets/capas/FiccaoCientifica/A_Mão_Esquerda_da_Escuridão.png') },
        { id: 3, title: "Duna", author: "Frank Herbert", synopsis: "No planeta desértico de Arrakis, Paul Atreides se torna o herdeiro de um império galáctico e enfrenta uma jornada épica para controlar a substância mais valiosa do universo, a especiaria melange.", image: require('../../../assets/capas/FiccaoCientifica/Duna.png') },
        { id: 4, title: "Fahrenheit 451", author: "Ray Bradbury", synopsis: "Em um futuro distópico onde os livros são proibidos e queimados, um bombeiro chamado Montag começa a questionar sua função e busca a verdade em um mundo de ignorância.", image: require('../../../assets/capas/FiccaoCientifica/Fahrenheit_451.png') },
        { id: 5, title: "Fundação", author: "Isaac Asimov", synopsis: "Hari Seldon prevê a queda do Império Galáctico e cria a Fundação para preservar o conhecimento e encurtar a era de escuridão que se seguirá.", image: require('../../../assets/capas/FiccaoCientifica/Fundação.png') },
        { id: 6, title: "Hyperion", author: "Dan Simmons", synopsis: "Sete peregrinos viajam ao planeta Hyperion para encontrar o mítico Shrike, uma entidade misteriosa que concede desejos, enquanto compartilham suas histórias pessoais.", image: require('../../../assets/capas/FiccaoCientifica/Hyperion.png') },
        { id: 7, title: "Neuromancer", author: "William Gibson", synopsis: "Case, um hacker desempregado, é recrutado para realizar o maior hack de sua vida, envolvendo inteligência artificial e uma conspiração cibernética.", image: require('../../../assets/capas/FiccaoCientifica/Neuromancer.png') },
        { id: 8, title: "O Homem do Castelo Alto", author: "Philip K. Dick", synopsis: "Em uma realidade alternativa onde o Eixo venceu a Segunda Guerra Mundial, diversas personagens lutam por sobrevivência e liberdade em uma América ocupada.", image: require('../../../assets/capas/FiccaoCientifica/O_Homem_do_Castelo_Alto.png') },
        { id: 9, title: "O Jogo do Exterminador", author: "Orson Scott Card", synopsis: "Em um futuro onde a humanidade está em guerra com uma raça alienígena, o jovem prodígio Ender Wiggin é treinado em um rigoroso programa militar para liderar a defesa da Terra.", image: require('../../../assets/capas/FiccaoCientifica/O_Jogo_do_Exterminador.png') },
        { id: 10, title: "Snow Crash", author: "Neal Stephenson", synopsis: "Hiro Protagonist, um hacker e entregador de pizza, descobre uma nova droga digital chamada Snow Crash que ameaça a realidade virtual e o mundo real.", image: require('../../../assets/capas/FiccaoCientifica/Snow_Crash.png') }
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
          <Text style={styles.categoryTitle}>Ficção Científica</Text>
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