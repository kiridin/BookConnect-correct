import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Terror() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Assombração da Casa da Colina", author: "Shirley Jackson", synopsis: "Quatro pessoas investigam uma casa supostamente assombrada e começam a experimentar eventos sobrenaturais aterrorizantes.", image: require('../../../assets/capas/Terror/A_Assombração_da_Casa_da_Colina.png') },
        { id: 2, title: "A Entidade", author: "Frank De Felitta", synopsis: "Baseado em eventos reais, uma mulher é atormentada por uma presença sobrenatural violenta em sua casa e busca ajuda para se livrar da entidade.", image: require('../../../assets/capas/Terror/A_Entidade.png') },
        { id: 3, title: "Drácula", author: "Bram Stoker", synopsis: "A história do conde Drácula e sua tentativa de se mudar da Transilvânia para a Inglaterra para espalhar a maldição dos vampiros.", image: require('../../../assets/capas/Terror/Drácula.png') },
        { id: 4, title: "Frankenstein", author: "Mary Shelley", synopsis: "Victor Frankenstein cria uma criatura a partir de cadáveres, mas sua criação monstruosa acaba se tornando uma ameaça para ele e para todos que ele ama.", image: require('../../../assets/capas/Terror/Frankenstein.png') },
        { id: 5, title: "Hell House", author: "Richard Matheson", synopsis: "Um grupo de investigadores entra na 'Casa do Inferno' para provar a existência de fenômenos paranormais, enfrentando horrores inimagináveis.", image: require('../../../assets/capas/Terror/Hell_House.png') },
        { id: 6, title: "O Bebê de Rosemary", author: "Ira Levin", synopsis: "Rosemary Woodhouse acredita que seu bebê é alvo de um culto satânico em Nova York, enquanto suas suspeitas aumentam sobre seus vizinhos.", image: require('../../../assets/capas/Terror/O_Bebê_de_Rosemary.png') },
        { id: 7, title: "O Chamado de Cthulhu", author: "H.P. Lovecraft", synopsis: "Uma série de descobertas leva um homem a investigar um culto sinistro e a existência de uma antiga entidade maligna, Cthulhu.", image: require('../../../assets/capas/Terror/O_Chamado_de_Cthulhu.png') },
        { id: 8, title: "O Exorcista", author: "William Peter Blatty", synopsis: "A história de uma jovem possuída por um demônio e os esforços desesperados de sua mãe e dois padres para exorcizar a entidade.", image: require('../../../assets/capas/Terror/O_Exorcista.png') },
        { id: 9, title: "O Iluminado", author: "Stephen King", synopsis: "Jack Torrance, um escritor com problemas, aceita um emprego como zelador de um hotel isolado, onde forças sobrenaturais ameaçam sua sanidade e sua família.", image: require('../../../assets/capas/Terror/O_Iluminado.png') }
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
          <Text style={styles.categoryTitle}>Terror</Text>
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