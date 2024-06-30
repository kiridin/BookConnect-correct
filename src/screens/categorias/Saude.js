// SaudeEBemEstar.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function SaudeEBemEstar() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Coragem de Ser Imperfeito", author: "Brené Brown", synopsis: "Incentiva a vulnerabilidade e a autenticidade como caminhos para uma vida plena e significativa, desafiando a cultura da perfeição.", image: require('../../../assets/capas/SaudeEBemEstar/A_Coragem_de_Ser_Imperfeito.png') },
        { id: 2, title: "A Dieta da Mente", author: "David Perlmutter", synopsis: "A conexão entre a alimentação e a saúde cerebral, oferecendo um plano alimentar para melhorar a função cognitiva e prevenir doenças neurológicas.", image: require('../../../assets/capas/SaudeEBemEstar/A_Dieta_da_Mente.png') },
        { id: 3, title: "A Mágica da Arrumação", author: "Marie Kondo", synopsis: "Um método para organizar a casa e a vida, baseado na ideia de manter apenas os itens que trazem alegria, promovendo um ambiente mais harmonioso.", image: require('../../../assets/capas/SaudeEBemEstar/A_Mágica_da_Arrumação.png') },
        { id: 4, title: "A Mente Organizada", author: "Daniel J. Levitin", synopsis: "Estratégias baseadas em pesquisas científicas para organizar a mente e aumentar a produtividade, lidando melhor com a sobrecarga de informações.", image: require('../../../assets/capas/SaudeEBemEstar/A_Mente_Organizada.png') },
        { id: 5, title: "O Corpo Fala", author: "Pierre Weil e Roland Tompakow", synopsis: "Uma análise sobre a linguagem corporal e como nossos gestos, posturas e expressões revelam nossos sentimentos e pensamentos.", image: require('../../../assets/capas/SaudeEBemEstar/O_Corpo_Fala.png') },
        { id: 6, title: "O Jeito Harvard de Ser Feliz", author: "Shawn Achor", synopsis: "Pesquisas sobre felicidade e sucesso, mostrando como uma mentalidade positiva pode levar a melhores resultados na vida pessoal e profissional.", image: require('../../../assets/capas/SaudeEBemEstar/O_Jeito_Harvard_de_Ser_Feliz.png') },
        { id: 7, title: "O Poder do Agora", author: "Eckhart Tolle", synopsis: "Um guia espiritual para viver no momento presente e alcançar a paz interior, afastando-se do pensamento negativo e do estresse.", image: require('../../../assets/capas/SaudeEBemEstar/O_Poder_do_Agora.png') },
        { id: 8, title: "Os 7 Hábitos das Pessoas Altamente Eficazes", author: "Stephen R. Covey", synopsis: "Um guia para alcançar eficácia pessoal e profissional através de sete hábitos que promovem o equilíbrio entre a vida pessoal e o trabalho.", image: require('../../../assets/capas/SaudeEBemEstar/Os_7_Hábitos_das_Pessoas_Altamente_Eficazes.png') },
        { id: 9, title: "Por que Engordamos e o que Fazer para Evitar", author: "Gary Taubes", synopsis: "Uma investigação sobre as causas da obesidade e como uma dieta rica em carboidratos pode ser prejudicial para a saúde.", image: require('../../../assets/capas/SaudeEBemEstar/Por_que_Engordamos_e_o_que_Fazer_para_Evitar.png') }
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
          <Text style={styles.categoryTitle}>Saúde e Bem-estar</Text>
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