// Culinaria.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Culinaria() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Cozinha de Casa", author: "Rodrigo Hilbert", synopsis: "Receitas simples e saborosas para o dia a dia, inspiradas na culinária caseira e nas tradições familiares do autor.", image: require('../../../assets/capas/Culinária/A_Cozinha_de_Casa.png') },
        { id: 2, title: "A Revolução na Cozinha", author: "Gordon Ramsay", synopsis: "Receitas e técnicas do famoso chef Gordon Ramsay, com foco em ingredientes frescos e métodos de preparo eficientes.", image: require('../../../assets/capas/Culinária/A_Revolução_na_Cozinha.png') },
        { id: 3, title: "Bela Cozinha", author: "Bela Gil", synopsis: "Receitas saudáveis e saborosas, inspiradas na culinária natural e orgânica, apresentadas pela chef e apresentadora Bela Gil.", image: require('../../../assets/capas/Culinária/Bela_Cozinha.png') },
        { id: 4, title: "Cozinha Prática", author: "Rita Lobo", synopsis: "Dicas e receitas práticas para o dia a dia, com foco em alimentação saudável e sustentável, escritas pela chef Rita Lobo.", image: require('../../../assets/capas/Culinária/Cozinha_Prática.png') },
        { id: 5, title: "Larousse da Cozinha", author: "Joël Robuchon", synopsis: "Um guia completo de culinária com mais de 3.000 receitas, técnicas e dicas de um dos mais renomados chefs do mundo.", image: require('../../../assets/capas/Culinária/Larousse_da_Cozinha.png') },
        { id: 6, title: "Mastering the Art of French Cooking", author: "Julia Child", synopsis: "Um clássico da culinária francesa, com receitas detalhadas e técnicas explicadas de maneira acessível para cozinheiros de todos os níveis.", image: require('../../../assets/capas/Culinária/Mastering_the_Art_of_French_Cooking.png') },
        { id: 7, title: "O Livro do Chá", author: "Kakuzo Okakura", synopsis: "Uma exploração da cerimônia do chá e da filosofia zen, destacando a importância do chá na cultura japonesa e sua influência na culinária.", image: require('../../../assets/capas/Culinária/O_Livro_do_Chá.png') },
        { id: 8, title: "The Joy of Cooking", author: "Irma S. Rombauer", synopsis: "Um clássico da culinária americana, com milhares de receitas e dicas úteis para cozinheiros de todos os níveis, desde iniciantes até experientes.", image: require('../../../assets/capas/Culinária/The_Joy_of_Cooking.png') }
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
          <Text style={styles.categoryTitle}>Culinária</Text>
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