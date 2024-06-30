// Romance.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Romance() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Sombra do Vento", author: "Carlos Ruiz Zafón", synopsis: "Um jovem descobre um livro raro em uma livraria secreta em Barcelona, desencadeando uma série de eventos misteriosos e um romance.", image: require('../../../assets/capas/Romance/A_Sombra_do_Vento.png') },
        { id: 2, title: "Anna Kariênina", author: "Liev Tolstói", synopsis: "Um retrato da alta sociedade russa através da história trágica de Anna Karenina, que se apaixona pelo conde Vronsky, levando a sua queda social.", image: require('../../../assets/capas/Romance/Anna_Kariênina.png') },
        { id: 3, title: "Cem Anos de Solidão", author: "Gabriel García Márquez", synopsis: "A saga da família Buendía na cidade fictícia de Macondo, que mistura realismo mágico e temas de amor, morte e destino.", image: require('../../../assets/capas/Romance/Cem_Anos_de_Solidão.png') },
        { id: 4, title: "Jane Eyre", author: "Charlotte Brontë", synopsis: "A jornada de uma órfã que se torna governanta e se apaixona pelo misterioso Mr. Rochester, descobrindo segredos sombrios em Thornfield Hall.", image: require('../../../assets/capas/Romance/Jane_Eyre.png') },
        { id: 5, title: "O Conde de Monte Cristo", author: "Alexandre Dumas", synopsis: "A épica história de vingança de Edmond Dantès, que é injustamente preso e busca justiça após escapar da prisão.", image: require('../../../assets/capas/Romance/O_Conde_de_Monte_Cristo.png') },
        { id: 6, title: "O Grande Gatsby", author: "F. Scott Fitzgerald", synopsis: "A história do misterioso milionário Jay Gatsby e seu amor obsessivo por Daisy Buchanan, ambientada na opulência dos anos 1920.", image: require('../../../assets/capas/Romance/O_Grande_Gatsby.png') },
        { id: 7, title: "O Morro dos Ventos Uivantes", author: "Emily Brontë", synopsis: "A paixão intensa e destrutiva entre Heathcliff e Catherine Earnshaw, ambientada nos campos selvagens de Yorkshire.", image: require('../../../assets/capas/Romance/O_Morro_dos_Ventos_Uivantes.png') },
        { id: 8, title: "Orgulho e Preconceito", author: "Jane Austen", synopsis: "A história de Elizabeth Bennet e Mr. Darcy, que superam mal-entendidos e preconceitos para encontrar o amor verdadeiro.", image: require('../../../assets/capas/Romance/Orgulho_e_Preconceito.png') }
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
          <Text style={styles.categoryTitle}>Romance</Text>
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