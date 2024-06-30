// Infantil.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Infantil() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Menina que Roubava Livros", author: "Markus Zusak", synopsis: "Durante a Segunda Guerra Mundial, uma menina chamada Liesel encontra consolo roubando livros e compartilhando-os com seus vizinhos, enquanto a Morte narra sua história.", image: require('../../../assets/capas/Infantil/A_Menina_que_Roubava_Livros.png') },
        { id: 2, title: "Alice no País das Maravilhas", author: "Lewis Carroll", synopsis: "As aventuras de Alice em um mundo mágico cheio de personagens excêntricos e situações absurdas, após cair em uma toca de coelho.", image: require('../../../assets/capas/Infantil/Alice_no_País_das_Maravilhas.png') },
        { id: 3, title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling", synopsis: "O jovem Harry Potter descobre que é um bruxo e embarca em uma jornada mágica na Escola de Magia e Bruxaria de Hogwarts.", image: require('../../../assets/capas/Infantil/Harry_Potter_e_a_Pedra_Filosofal.png') },
        { id: 4, title: "Matilda", author: "Roald Dahl", synopsis: "A história de uma menina superdotada que usa seus poderes telecinéticos para enfrentar pais negligentes e uma diretora cruel.", image: require('../../../assets/capas/Infantil/Matilda.png') },
        { id: 5, title: "O Grúfalo", author: "Julia Donaldson", synopsis: "A história de um ratinho esperto que engana predadores na floresta inventando um monstro chamado Grúfalo, apenas para descobrir que ele é real.", image: require('../../../assets/capas/Infantil/O_Grúfalo.png') },
        { id: 6, title: "O Mágico de Oz", author: "L. Frank Baum", synopsis: "Dorothy e seu cachorro Toto são levados por um tornado para a terra de Oz, onde encontram amigos peculiares e enfrentam desafios para voltar para casa.", image: require('../../../assets/capas/Infantil/O_Mágico_de_Oz.png') },
        { id: 7, title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", synopsis: "A história de um pequeno príncipe que viaja de planeta em planeta, aprendendo lições valiosas sobre amor, amizade e a essência da vida.", image: require('../../../assets/capas/Infantil/O_Pequeno_Príncipe.png') },
        { id: 8, title: "O Ursinho Pooh", author: "A.A. Milne", synopsis: "As aventuras do ursinho Pooh e seus amigos na Floresta dos Cem Acres, com histórias encantadoras sobre amizade e diversão.", image: require('../../../assets/capas/Infantil/O_Ursinho_Pooh.png') },
        { id: 9, title: "Peter Pan", author: "J.M. Barrie", synopsis: "As aventuras de Peter Pan, o menino que não queria crescer, e seus amigos na Terra do Nunca, enfrentando piratas e descobrindo a magia da infância.", image: require('../../../assets/capas/Infantil/Peter_Pan.png') }
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
          <Text style={styles.categoryTitle}>Infantil</Text>
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