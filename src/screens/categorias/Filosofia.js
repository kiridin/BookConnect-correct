// Filosofia.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Filosofia() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Ética", author: "Baruch Spinoza", synopsis: "Uma obra filosófica que apresenta uma visão sistemática da realidade, baseada na ideia de que tudo está interconectado através da substância divina.", image: require('../../../assets/capas/Filosofia/A_Ética.png') },
        { id: 2, title: "A República", author: "Platão", synopsis: "Um diálogo entre Sócrates e outros cidadãos de Atenas sobre a natureza da justiça, a organização da sociedade e o papel do filósofo-rei.", image: require('../../../assets/capas/Filosofia/A_República.png') },
        { id: 3, title: "Assim Falou Zaratustra", author: "Friedrich Nietzsche", synopsis: "Uma obra filosófica que explora conceitos como o eterno retorno, o além-homem e a morte de Deus, através dos ensinamentos do profeta Zaratustra.", image: require('../../../assets/capas/Filosofia/Assim_Falou_Zaratustra.png') },
        { id: 4, title: "Crítica da Razão Pura", author: "Immanuel Kant", synopsis: "Uma análise profunda da natureza do conhecimento humano, questionando os limites da razão e a possibilidade de conhecimento a priori.", image: require('../../../assets/capas/Filosofia/Crítica_da_Razão_Pura.png') },
        { id: 5, title: "Meditações", author: "Marco Aurélio", synopsis: "Reflexões pessoais do imperador romano Marco Aurélio, que oferece conselhos sobre ética, virtude e a vida estóica.", image: require('../../../assets/capas/Filosofia/Meditações.png') },
        { id: 6, title: "O Anticristo", author: "Friedrich Nietzsche", synopsis: "Uma crítica feroz ao cristianismo e à moralidade ocidental, propondo uma nova filosofia de vida baseada na afirmação da vontade e da vida.", image: require('../../../assets/capas/Filosofia/O_Anticristo.png') },
        { id: 7, title: "O Banquete", author: "Platão", synopsis: "Um diálogo sobre a natureza do amor, onde vários convidados discutem suas perspectivas sobre Eros, o amor divino e o amor humano.", image: require('../../../assets/capas/Filosofia/O_Banquete.png') },
        { id: 8, title: "O Mundo de Sofia", author: "Jostein Gaarder", synopsis: "Uma jovem chamada Sofia recebe misteriosos bilhetes que a levam a uma jornada através da história da filosofia ocidental.", image: require('../../../assets/capas/Filosofia/O_Mundo_de_Sofia.png') },
        { id: 9, title: "O Príncipe", author: "Niccolò Machiavelli", synopsis: "Um tratado político que oferece conselhos práticos para os governantes sobre como adquirir e manter o poder.", image: require('../../../assets/capas/Filosofia/O_Príncipe.png') },
        { id: 10, title: "O Ser e o Nada", author: "Jean-Paul Sartre", synopsis: "Uma obra fundamental do existencialismo que explora a natureza da existência, a liberdade humana e a angústia existencial.", image: require('../../../assets/capas/Filosofia/O_Ser_e_o_Nada.png') }
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
          <Text style={styles.categoryTitle}>Filosofia</Text>
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