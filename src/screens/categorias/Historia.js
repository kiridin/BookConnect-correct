// Historia.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Historia() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Ascensão e Queda do Terceiro Reich", author: "William L. Shirer", synopsis: "Uma crônica detalhada do nascimento, ascensão e queda do regime nazista na Alemanha, com base em documentos e testemunhos da época.", image: require('../../../assets/capas/Historia/A_Ascensão_e_Queda_do_Terceiro_Reich.png') },
        { id: 2, title: "A People's History of the United States", author: "Howard Zinn", synopsis: "Uma história dos Estados Unidos contada a partir da perspectiva das pessoas comuns, incluindo trabalhadores, mulheres e minorias.", image: require('../../../assets/capas/Historia/A_Peoples_History_of_the_United_States.png') },
        { id: 3, title: "Guns, Germs, and Steel", author: "Jared Diamond", synopsis: "Uma análise das causas ambientais e geográficas que influenciaram o desenvolvimento das sociedades humanas ao longo da história.", image: require('../../../assets/capas/Historia/Guns,_Germs,_and_Steel.png') },
        { id: 4, title: "História da Revolução Russa", author: "Leon Trotsky", synopsis: "Um relato detalhado dos eventos que levaram à Revolução Russa de 1917, escrito por um dos principais líderes revolucionários.", image: require('../../../assets/capas/Historia/História_da_Revolução_Russa.png') },
        { id: 5, title: "História da Segunda Guerra Mundial", author: "Winston Churchill", synopsis: "A perspectiva de Winston Churchill sobre a Segunda Guerra Mundial, incluindo suas memórias e análises dos eventos que moldaram o conflito.", image: require('../../../assets/capas/Historia/História_da_Segunda_Guerra_Mundial.png') },
        { id: 6, title: "O Declínio e Queda do Império Romano", author: "Edward Gibbon", synopsis: "Uma obra clássica que narra a história do Império Romano, desde a sua grandeza até a sua eventual queda.", image: require('../../../assets/capas/Historia/O_Declínio_e_Queda_do_Império_Romano.png') },
        { id: 7, title: "O Diário de Anne Frank", author: "Anne Frank", synopsis: "O diário de uma jovem judia que se escondeu com sua família dos nazistas durante a Segunda Guerra Mundial, oferecendo uma visão íntima de suas esperanças e medos.", image: require('../../../assets/capas/Historia/O_Diário_de_Anne_Frank.png') },
        { id: 8, title: "O Livro Negro do Comunismo", author: "Stéphane Courtois et al.", synopsis: "Um estudo sobre os crimes cometidos por regimes comunistas no século XX, baseado em documentos históricos e testemunhos.", image: require('../../../assets/capas/Historia/O_Livro_Negro_do_Comunismo.png') },
        { id: 9, title: "Os Sertões", author: "Euclides da Cunha", synopsis: "Um relato sobre a Guerra de Canudos, um conflito ocorrido no interior do Brasil no final do século XIX, combinando história, sociologia e geografia.", image: require('../../../assets/capas/Historia/Os_Sertões.png') }
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
          <Text style={styles.categoryTitle}>História</Text>
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