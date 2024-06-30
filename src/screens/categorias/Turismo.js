import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Turismo() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Arte de Viajar", author: "Alain de Botton", synopsis: "Reflexões filosóficas sobre o ato de viajar, explorando o impacto das viagens em nossas percepções e emoções.", image: require('../../../assets/capas/Turismo/A_Arte_de_Viajar.png') },
        { id: 2, title: "Cidades Invisíveis", author: "Italo Calvino", synopsis: "Um livro de viagens imaginárias, onde Marco Polo descreve ao imperador Kublai Khan as cidades que visitou, explorando temas de cultura e identidade.", image: require('../../../assets/capas/Turismo/Cidades_Invisíveis.png') },
        { id: 3, title: "Comer, Rezar, Amar", author: "Elizabeth Gilbert", synopsis: "As memórias de viagem da autora, que busca autodescoberta através de aventuras na Itália, Índia e Indonésia.", image: require('../../../assets/capas/Turismo/Comer,_Rezar,_Amar.png') },
        { id: 4, title: "Mil Lugares para Conhecer Antes de Morrer", author: "Patricia Schultz", synopsis: "Um guia de viagem que destaca destinos imperdíveis ao redor do mundo, com dicas sobre o que ver e fazer em cada lugar.", image: require('../../../assets/capas/Turismo/Mil_Lugares_para_Conhecer_Antes_de_Morrer.png') },
        { id: 5, title: "O Grande Bazar Ferroviário", author: "Paul Theroux", synopsis: "As aventuras de Paul Theroux em viagens de trem pela Europa, Ásia e Oriente Médio, oferecendo uma visão íntima das culturas locais.", image: require('../../../assets/capas/Turismo/O_Grande_Bazar_Ferroviário.png') },
        { id: 6, title: "On the Road", author: "Jack Kerouac", synopsis: "As aventuras de Kerouac e seus amigos em viagens de carro pelos Estados Unidos, capturando o espírito da geração beat.", image: require('../../../assets/capas/Turismo/On_the_Road.png') },
        { id: 7, title: "Rumo à Estação Finlândia", author: "Edmund Wilson", synopsis: "Uma jornada intelectual através da Europa, explorando os marcos históricos e culturais que moldaram a história moderna.", image: require('../../../assets/capas/Turismo/Rumo_à_Estação_Finlândia.png') },
        { id: 8, title: "Um Ano na Provence", author: "Peter Mayle", synopsis: "As memórias de Peter Mayle sobre sua mudança para a Provence, na França, e sua adaptação ao estilo de vida local.", image: require('../../../assets/capas/Turismo/Um_Ano_na_Provence.png') }
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
          <Text style={styles.categoryTitle}>Turismo</Text>
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