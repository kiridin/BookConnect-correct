// Arte.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Arte() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A História da Arte", author: "E.H. Gombrich", synopsis: "Uma introdução abrangente à história da arte, desde as primeiras pinturas rupestres até a arte moderna, explorando técnicas, estilos e artistas.", image: require('../../../assets/capas/Arte/A_Historia_da_Arte.png') },
        { id: 2, title: "A Vida e a Obra de Vincent van Gogh", author: "Naomi Maurer", synopsis: "Uma biografia ilustrada do famoso pintor pós-impressionista, explorando sua vida, suas lutas e suas obras de arte.", image: require('../../../assets/capas/Arte/A_Vida_e_a_Obra_de_Vincent_van_Gogh.png') },
        { id: 3, title: "A Vida Secreta das Cores", author: "Kassia St. Clair", synopsis: "A história cultural e social de diferentes cores, explorando como elas foram usadas e interpretadas ao longo do tempo.", image: require('../../../assets/capas/Arte/A_Vida_Secreta_das_Cores.png') },
        { id: 4, title: "História da Beleza", author: "Umberto Eco", synopsis: "Uma exploração filosófica e histórica do conceito de beleza, analisando como a percepção da beleza mudou ao longo do tempo.", image: require('../../../assets/capas/Arte/Historia_da_Beleza.png') },
        { id: 5, title: "Leonardo da Vinci", author: "Walter Isaacson", synopsis: "Uma biografia do gênio renascentista Leonardo da Vinci, explorando sua vida, suas obras e seu impacto na arte e na ciência.", image: require('../../../assets/capas/Arte/Leonardo_da_Vinci.png') },
        { id: 6, title: "O Diário de Frida Kahlo", author: "Frida Kahlo", synopsis: "O diário pessoal da famosa pintora mexicana, com ilustrações e reflexões sobre sua vida, sua arte e suas dores.", image: require('../../../assets/capas/Arte/O_Diario_de_Frida_Kahlo.png') },
        { id: 7, title: "O Pintor de Batalhas", author: "Arturo Pérez-Reverte", synopsis: "Um ex-fotógrafo de guerra que se retira para pintar um mural é confrontado por um homem cuja vida ele arruinou com uma foto.", image: require('../../../assets/capas/Arte/O_Pintor_de_Batalhas.png') },
        { id: 8, title: "Roubaram a Mona Lisa!", author: "R.A. Scotti", synopsis: "A história do roubo da Mona Lisa do Museu do Louvre em 1911 e as investigações que se seguiram para recuperá-la.", image: require('../../../assets/capas/Arte/Roubaram_a_Mona_Lisa!.png') },
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
          <Text style={styles.categoryTitle}>Arte</Text>
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
