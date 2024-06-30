// Suspense.js
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../components/navbar';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Suspense() {
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadImages = () => {
      const imageInfo = [
        { id: 1, title: "A Garota no Trem", author: "Paula Hawkins", synopsis: "Rachel, uma mulher alcoólatra, testemunha algo estranho de um trem e se envolve em uma investigação de desaparecimento.", image: require('../../../assets/capas/Suspense/A_Garota_no_Trem.png') },
        { id: 2, title: "A Mulher na Janela", author: "A.J. Finn", synopsis: "Anna Fox, uma psicóloga agorafóbica, acredita ter testemunhado um crime na casa vizinha, mas ninguém acredita nela, e ela deve descobrir a verdade.", image: require('../../../assets/capas/Suspense/A_Mulher_na_Janela.png') },
        { id: 3, title: "A Paciente Silenciosa", author: "Alex Michaelides", synopsis: "Alicia Berenson, uma pintora famosa, se recusa a falar após matar seu marido, e um psicoterapeuta tenta descobrir o que realmente aconteceu.", image: require('../../../assets/capas/Suspense/A_Paciente_Silenciosa.png') },
        { id: 4, title: "Antes de Dormir", author: "S.J. Watson", synopsis: "Christine Lucas perde suas memórias a cada dia e tenta descobrir a verdade sobre sua vida e seu passado com a ajuda de um diário.", image: require('../../../assets/capas/Suspense/Antes_de_Dormir.png') },
        { id: 5, title: "Caixa de Pássaros", author: "Josh Malerman", synopsis: "Em um mundo pós-apocalíptico, uma mãe e seus dois filhos devem atravessar um rio de olhos vendados para escapar de criaturas que causam insanidade.", image: require('../../../assets/capas/Suspense/Caixa_de_Pássaros.png') },
        { id: 6, title: "Garota Exemplar", author: "Gillian Flynn", synopsis: "Quando Amy Dunne desaparece, seu marido Nick se torna o principal suspeito, revelando segredos sombrios sobre seu casamento.", image: require('../../../assets/capas/Suspense/Garota_Exemplar.png') },
        { id: 7, title: "O Código Da Vinci", author: "Dan Brown", synopsis: "O simbologista Robert Langdon investiga um assassinato no Louvre, levando a uma caça ao tesouro por segredos antigos da Igreja Católica.", image: require('../../../assets/capas/Suspense/O_Código_Da_Vinci.png') },
        { id: 8, title: "O Quarto", author: "Emma Donoghue", synopsis: "A história de uma mãe e seu filho que são mantidos em cativeiro em um pequeno quarto, e sua tentativa de escapar para a liberdade.", image: require('../../../assets/capas/Suspense/O_Quarto.png') },
        { id: 9, title: "O Silêncio dos Inocentes", author: "Thomas Harris", synopsis: "A agente do FBI Clarice Starling busca a ajuda do psiquiatra e canibal Hannibal Lecter para capturar um assassino em série.", image: require('../../../assets/capas/Suspense/O_Silêncio_dos_Inocentes.png') },
        { id: 10, title: "Os Homens que Não Amavam as Mulheres", author: "Stieg Larsson", synopsis: "O jornalista Mikael Blomkvist e a hacker Lisbeth Salander investigam o desaparecimento de uma jovem em uma família rica e poderosa.", image: require('../../../assets/capas/Suspense/Os_Homens_que_Não_Amavam_as_Mulheres.png') }
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
          <Text style={styles.categoryTitle}>Suspense</Text>
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