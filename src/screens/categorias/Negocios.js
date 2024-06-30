// Negocios.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Negocios() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Arte da Guerra", author: "Sun Tzu", synopsis: "Embora um antigo tratado militar, seus ensinamentos são aplicáveis aos negócios modernos, oferecendo insights sobre estratégia e liderança.", image: require('../../../assets/capas/Negocios/A_Arte_da_Guerra.png') },
        { id: 2, title: "A Estratégia do Oceano Azul", author: "W. Chan Kim e Renée Mauborgne", synopsis: "Um guia para criar novos mercados e tornar a concorrência irrelevante, focando em inovação e valor.", image: require('../../../assets/capas/Negocios/A_Estratégia_do_Oceano_Azul.png') },
        { id: 3, title: "A Startup Enxuta", author: "Eric Ries", synopsis: "Estratégias para a criação e gestão de startups que focam em eficiência, inovação contínua e aprendizado validado.", image: require('../../../assets/capas/Negocios/A_Startup_Enxuta.png') },
        { id: 4, title: "Como Fazer Amigos e Influenciar Pessoas", author: "Dale Carnegie", synopsis: "Técnicas de comunicação e relacionamento interpessoal que são essenciais para o sucesso nos negócios e na vida profissional.", image: require('../../../assets/capas/Negocios/Como_Fazer_Amigos_e_Influenciar_Pessoas.png') },
        { id: 5, title: "De Zero a Um", author: "Peter Thiel", synopsis: "Conselhos do cofundador do PayPal sobre como construir empresas inovadoras que criam algo novo, em vez de competir em mercados existentes.", image: require('../../../assets/capas/Negocios/De_Zero_a_Um.png') },
        { id: 6, title: "O Dilema da Inovação", author: "Clayton Christensen", synopsis: "Como as empresas bem-sucedidas podem falhar ao ignorar tecnologias disruptivas e o que podem fazer para inovar e prosperar.", image: require('../../../assets/capas/Negocios/O_Dilema_da_Inovação.png') },
        { id: 7, title: "O Poder do Hábito", author: "Charles Duhigg", synopsis: "Explora como os hábitos impactam a produtividade e o sucesso nos negócios, oferecendo estratégias para criar hábitos positivos.", image: require('../../../assets/capas/Negocios/O_Poder_do_Hábito.png') },
        { id: 8, title: "Pai Rico, Pai Pobre", author: "Robert Kiyosaki", synopsis: "Lições sobre investimentos, empreendedorismo e educação financeira, com foco em alcançar a independência financeira.", image: require('../../../assets/capas/Negocios/Pai_Rico,_Pai_Pobre.png') },
        { id: 9, title: "Sonho Grande", author: "Cristiane Correa", synopsis: "A história dos empresários brasileiros Jorge Paulo Lemann, Marcel Telles e Beto Sicupira, que construíram impérios empresariais como Ambev e Burger King.", image: require('../../../assets/capas/Negocios/Sonho_Grande.png') }
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
          <Text style={styles.categoryTitle}>Negócios</Text>
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