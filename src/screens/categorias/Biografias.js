// Biografias.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Biografias() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "Alexander Hamilton", author: "Ron Chernow", synopsis: "A biografia do fundador americano Alexander Hamilton, detalhando sua vida desde a infância até seu papel fundamental na fundação dos Estados Unidos.", image: require('../../../assets/capas/Biografias/Alexander_Hamilton.png') },
        { id: 2, title: "Eu Sou Malala", author: "Malala Yousafzai", synopsis: "A história de Malala Yousafzai, uma jovem paquistanesa que lutou pelo direito à educação e sobreviveu a um ataque dos talibãs, tornando-se uma ativista mundial.", image: require('../../../assets/capas/Biografias/Eu_Sou_Malala.png') },
        { id: 3, title: "Leonardo da Vinci", author: "Walter Isaacson", synopsis: "Uma biografia do gênio renascentista Leonardo da Vinci, explorando sua vida, suas obras e seu impacto na arte e na ciência.", image: require('../../../assets/capas/Biografias/Leonardo_da_Vinci.png') },
        { id: 4, title: "Longa Caminhada até a Liberdade", author: "Nelson Mandela", synopsis: "A autobiografia de Nelson Mandela, detalhando sua luta contra o apartheid na África do Sul e sua jornada de prisão à presidência.", image: require('../../../assets/capas/Biografias/Longa_Caminhada_até_a_Liberdade.png') },
        { id: 5, title: "O Diário de Anne Frank", author: "Anne Frank", synopsis: "O diário de uma jovem judia que se escondeu com sua família dos nazistas durante a Segunda Guerra Mundial, oferecendo uma visão íntima de suas esperanças e medos.", image: require('../../../assets/capas/Biografias/O_Diário_de_Anne_Frank.png') },
        { id: 6, title: "O Príncipe", author: "Niccolò Machiavelli", synopsis: "Embora não seja uma biografia tradicional, este livro oferece uma visão dos pensamentos e das experiências de vida de Machiavelli, influente na política e na filosofia.", image: require('../../../assets/capas/Biografias/O_Príncipe.png') },
        { id: 7, title: "Steve Jobs", author: "Walter Isaacson", synopsis: "A biografia autorizada do cofundador da Apple, Steve Jobs, explorando sua vida, sua carreira e seu impacto na tecnologia e na cultura.", image: require('../../../assets/capas/Biografias/Steve_Jobs.png') }
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
          <Text style={styles.categoryTitle}>Biografias</Text>
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
