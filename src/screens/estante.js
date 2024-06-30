// Arte.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Estante() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "O Poder do Hábito", author: "Charles Duhigg", synopsis: "Uma análise de como os hábitos se formam e como podem ser alterados, oferecendo estratégias para criar hábitos positivos e eliminar os negativos.", image: require('../../assets/capas/Autoajuda/O_Poder_do_Hábito.png') },
        { id: 2, title: "O Poder do Agora", author: "Naomi Maurer", synopsis: "Um guia espiritual para viver no momento presente e alcançar a paz interior, afastando-se do pensamento negativo e do estresse.", image: require('../../assets/capas/Autoajuda/O_Poder_do_Agora.png') },
        { id: 3, title: "A Vida Secreta das Cores", author: "Kassia St. Clair", synopsis: "A história cultural e social de diferentes cores, explorando como elas foram usadas e interpretadas ao longo do tempo.", image: require('../../assets/capas/Arte/A_Vida_Secreta_das_Cores.png') },
        { id: 4, title: "História da Beleza", author: "Umberto Eco", synopsis: "Uma exploração filosófica e histórica do conceito de beleza, analisando como a percepção da beleza mudou ao longo do tempo.", image: require('../../assets/capas/Arte/Historia_da_Beleza.png') },
        { id: 5, title: "Leonardo da Vinci", author: "Eckhart Tolle", synopsis: "Uma biografia do gênio renascentista Leonardo da Vinci, explorando sua vida, suas obras e seu impacto na arte e na ciência.", image: require('../../assets/capas/Arte/Leonardo_da_Vinci.png') },
        { id: 6, title: "1984", author: "George Orwell", synopsis: "Em uma sociedade totalitária onde o Grande Irmão controla tudo, Winston Smith luta contra a opressão e busca a liberdade de pensamento.", image: require('../../assets/capas/FiccaoCientifica/1984.png' )},

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
          <Text style={styles.categoryTitle}>Minha Estante</Text>
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
    width: '19%',
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
    elevation: 8,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
});
