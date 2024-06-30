// Religiao.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Religiao() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Bíblia Sagrada", author: "Vários Autores", synopsis: "O texto religioso central do cristianismo, composto por dois testamentos que narram a criação do mundo, a história do povo de Israel, a vida de Jesus Cristo e os ensinamentos para a vida cristã.", image: require('../../../assets/capas/Religiao/A_Bíblia_Sagrada.png') },
        { id: 2, title: "A Cabana", author: "William P. Young", synopsis: "Após o desaparecimento de sua filha, Mack recebe uma misteriosa carta que o leva a uma cabana onde ele encontra Deus e embarca em uma jornada de cura espiritual.", image: require('../../../assets/capas/Religiao/A_Cabana.png') },
        { id: 3, title: "Bhagavad Gita", author: "Anônimo", synopsis: "Um diálogo entre o príncipe Arjuna e o deus Krishna, que aborda temas como dever, moralidade e a natureza da existência no contexto da guerra.", image: require('../../../assets/capas/Religiao/Bhagavad_Gita.png') },
        { id: 4, title: "Confissões", author: "Santo Agostinho", synopsis: "A autobiografia espiritual de Santo Agostinho, onde ele narra sua jornada de pecado e redenção, e sua busca por Deus.", image: require('../../../assets/capas/Religiao/Confissões.png') },
        { id: 5, title: "O Alcorão", author: "Vários Autores", synopsis: "O texto sagrado do islamismo, considerado a palavra de Deus revelada ao profeta Maomé, contendo orientações para a vida dos muçulmanos.", image: require('../../../assets/capas/Religiao/O_Alcorão.png') },
        { id: 6, title: "O Código Da Vinci", author: "Dan Brown", synopsis: "Um thriller religioso que segue o simbologista Robert Langdon enquanto ele desvenda uma conspiração envolvendo a Igreja Católica e o Santo Graal.", image: require('../../../assets/capas/Religiao/O_Código_Da_Vinci.png') },
        { id: 7, title: "O Livro dos Espíritos", author: "Allan Kardec", synopsis: "Uma obra fundamental do espiritismo, que apresenta diálogos entre o autor e espíritos, discutindo temas como a vida após a morte, reencarnação e a moralidade.", image: require('../../../assets/capas/Religiao/O_Livro_dos_Espíritos.png') },
        { id: 8, title: "O Livro Tibetano dos Mortos", author: "Anônimo", synopsis: "Um guia espiritual budista tibetano que oferece instruções para a jornada da alma após a morte, ajudando-a a alcançar a iluminação e escapar do ciclo de reencarnação.", image: require('../../../assets/capas/Religiao/O_Livro_Tibetano_dos_Mortos.png') },
        { id: 9, title: "Os Manuscritos do Mar Morto", author: "Anônimo", synopsis: "Uma coleção de textos religiosos judaicos encontrados nas cavernas de Qumran, que fornecem insights sobre a vida religiosa e as crenças do antigo Israel.", image: require('../../../assets/capas/Religiao/Os_Manuscritos_do_Mar_Morto.png') },
        { id: 10, title: "Tao Te Ching", author: "Lao-Tsé", synopsis: "Uma coleção de 81 versos escritos pelo filósofo chinês Lao-Tsé, que explora os princípios do Taoísmo, destacando a harmonia com o Tao, ou 'Caminho'.", image: require('../../../assets/capas/Religiao/Tao_Te_Ching.png') }
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
          <Text style={styles.categoryTitle}>Religião</Text>
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