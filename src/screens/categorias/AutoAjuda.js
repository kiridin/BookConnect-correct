// Autoajuda.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Autoajuda() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "O Milagre da Manhã", author: "Hal Elrod", synopsis: "Um programa matinal que promete transformar sua vida antes das 8 da manhã, ajudando a alcançar sucesso pessoal e profissional.", image: require('../../../assets/capas/Autoajuda/O_Milagre_da_Manhã.png') },
        { id: 2, title: "O Poder do Agora", author: "Eckhart Tolle", synopsis: "Um guia espiritual para viver no momento presente e alcançar a paz interior, afastando-se do pensamento negativo e do estresse.", image: require('../../../assets/capas/Autoajuda/O_Poder_do_Agora.png') },
        { id: 3, title: "O Poder do Hábito", author: "Charles Duhigg", synopsis: "Uma análise de como os hábitos se formam e como podem ser alterados, oferecendo estratégias para criar hábitos positivos e eliminar os negativos.", image: require('../../../assets/capas/Autoajuda/O_Poder_do_Hábito.png') },
        { id: 4, title: "Os Segredos da Mente Milionária", author: "T. Harv Eker", synopsis: "Estratégias para mudar sua mentalidade financeira e alcançar a riqueza, baseadas em princípios de psicologia e comportamento.", image: require('../../../assets/capas/Autoajuda/Os_Segredos_da_Mente_Milionária.png') },
        { id: 5, title: "Os Sete Hábitos das Pessoas Altamente Eficazes", author: "Stephen R. Covey", synopsis: "Um guia para alcançar eficácia pessoal e profissional através de sete hábitos que promovem o equilíbrio entre a vida pessoal e o trabalho.", image: require('../../../assets/capas/Autoajuda/Os_Sete_Hábitos_das_Pessoas_Altamente_Eficazes.png') },
        { id: 6, title: "Pai Rico, Pai Pobre", author: "Robert Kiyosaki", synopsis: "Lições financeiras do autor, contrastando as filosofias de seu pai biológico e de seu pai rico, destacando a importância da educação financeira e do investimento.", image: require('../../../assets/capas/Autoajuda/Pai_Rico,_Pai_Pobre.png') }
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
          <Text style={styles.categoryTitle}>Autoajuda</Text>
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
    elevation: 8,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
});
