import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputWithHamburgerMenu from '../components/input';
import Navbar from '../components/navbar';

// Importando as imagens locais
import Capa1 from '../../assets/capas/Suspense/Os_Homens_que_Não_Amavam_as_Mulheres.png';
import Capa2 from '../../assets/capas/Arte/A_Vida_e_a_Obra_de_Vincent_van_Gogh.png';
import Capa3 from '../../assets/capas/Arte/A_Vida_e_a_Obra_de_Vincent_van_Gogh.png';
import Capa4 from '../../assets/capas/Arte/Historia_da_Beleza.png';
import Capa5 from '../../assets/capas/Arte/Leonardo_da_Vinci.png';
import Capa6 from '../../assets/capas/Autoajuda/O_Poder_do_Agora.png';
import Capa7 from '../../assets/capas/Ciencia/A_Realidade_Oculta.png';
import Capa8 from '../../assets/capas/Suspense/Garota_Exemplar.png';
import Capa9 from '../../assets/capas/Filosofia/O_Mundo_de_Sofia.png';
import Capa10 from '../../assets/capas/Suspense/O_Silêncio_dos_Inocentes.png';
import Capa11 from '../../assets/capas/Arte/A_Vida_e_a_Obra_de_Vincent_van_Gogh.png';
import Capa12 from '../../assets/capas/Suspense/A_Garota_no_Trem.png';

// Importando os banners
import Banner1 from '../../assets/bannerfic.png';
import Banner2 from '../../assets/bannerhab.png';
import Banner3 from '../../assets/banneriki.png';

const { width } = Dimensions.get('window');

const banners = [Banner1, Banner2, Banner3];

const Bookconnect = () => {
  const navigation = useNavigation();

  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTransform = useRef(new Animated.Value(-20)).current;
  const bookOpacity = useRef(new Animated.Value(0)).current;
  const bookTransform = useRef(new Animated.Value(20)).current;

  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(titleTransform, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();

    Animated.timing(bookOpacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(bookTransform, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (banners.length + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentIndex * width,
        animated: true,
      });
    }
  }, [currentIndex]);

  const onScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentPage = Math.round(contentOffsetX / width);
    if (currentPage === 0) {
      scrollViewRef.current.scrollTo({ x: banners.length * width, animated: false });
      setCurrentIndex(banners.length);
    } else if (currentPage === banners.length + 1) {
      scrollViewRef.current.scrollTo({ x: width, animated: false });
      setCurrentIndex(1);
    } else {
      setCurrentIndex(currentPage);
    }
  };

  const renderBooks = (books) => {
    return books.map((book, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('BookDetails', { book })}
      >
        <Animated.View
          style={{
            opacity: bookOpacity,
            transform: [{ translateX: bookTransform }],
            marginRight: 10,
          }}
        >
          <View style={styles.bookContainer}>
            <Image style={styles.bookImage} source={book.image} />
          </View>
        </Animated.View>
      </TouchableOpacity>
    ));
  };

  const popularBooks = [
    {
      title: 'Os Homens que Não Amavam as Mulheres',
      author: 'Stieg Larsson',
      synopsis: 'O jornalista Mikael Blomkvist e a hacker Lisbeth Salander investigam o desaparecimento de uma jovem em uma família rica e poderosa.',
      image: Capa1,
    },
    {
      title: 'A Vida e a Obra de Vincent van Gogh',
      author: 'Steven Naifeh',
      synopsis: 'Uma biografia ilustrada do famoso pintor pós-impressionista, explorando sua vida, suas lutas e suas obras de arte.',
      image: Capa2,
    },
    {
      title: 'A Vida e a Obra de Vincent van Gogh',
      author: 'Steven Naifeh',
      synopsis: 'Uma biografia ilustrada do famoso pintor pós-impressionista, explorando sua vida, suas lutas e suas obras de arte.',
      image: Capa3,
    },
    {
      title: 'História da Beleza',
      author: 'Umberto Eco',
      synopsis: 'Uma exploração filosófica e histórica do conceito de beleza, analisando como a percepção da beleza mudou ao longo do tempo.',
      image: Capa4,
    },
    {
      title: 'Leonardo da Vinci',
      author: 'Walter Isaacson',
      synopsis: 'Uma biografia do gênio renascentista Leonardo da Vinci, explorando sua vida, suas obras e seu impacto na arte e na ciência.',
      image: Capa5,
    },
    {
      title: 'O Poder do Agora',
      author: 'Eckhart Tolle',
      synopsis: 'Um guia espiritual para viver no momento presente e alcançar a paz interior, afastando-se do pensamento negativo e do estresse.',
      image: Capa6,
    },
  ];

  const recentBooks = [
    {
      title: 'A Realidade Oculta',
      author: 'Brian Greene',
      synopsis: 'Uma exploração das teorias da física moderna que sugerem a existência de universos paralelos e a natureza fundamental da realidade.',
      image: Capa7,
    },
    {
      title: 'Garota Exemplar',
      author: 'Gillian Flynn',
      synopsis: 'Quando Amy Dunne desaparece, seu marido Nick se torna o principal suspeito, revelando segredos sombrios sobre seu casamento.',
      image: Capa8,
    },
    {
      title: 'O Mundo de Sofia',
      author: 'Jostein Gaarder',
      synopsis: 'Uma jovem chamada Sofia recebe misteriosos bilhetes que a levam a uma jornada através da história da filosofia ocidental.',
      image: Capa9,
    },
    {
      title: 'O Silêncio dos Inocentes',
      author: 'Thomas Harris',
      synopsis: 'A agente do FBI Clarice Starling busca a ajuda do psiquiatra e canibal Hannibal Lecter para capturar um assassino em série.',
      image: Capa10,
    },
    {
      title: 'A Vida e a Obra de Vincent van Gogh',
      author: 'Steven Naifeh',
      synopsis: 'Uma biografia ilustrada do famoso pintor pós-impressionista, explorando sua vida, suas lutas e suas obras de arte.',
      image: Capa11,
    },
    {
      title: 'A Garota no Trem',
      author: 'Paula Hawkins',
      synopsis: 'Rachel, uma mulher alcoólatra, testemunha algo estranho de um trem e se envolve em uma investigação de desaparecimento.',
      image: Capa12,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <InputWithHamburgerMenu />

        <View style={styles.bannerContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
          >
            {banners.map((banner, index) => (
              <Image key={index} source={banner} style={styles.bannerImage} />
            ))}
            {banners.map((banner, index) => (
              <Image key={banners.length + index} source={banner} style={styles.bannerImage} />
            ))}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {banners.map((_, index) => (
              <View
                key={index}
                style={[
                 

 styles.indicator,
                  { opacity: currentIndex === index + 1 ? 1 : 0.5 },
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Animated.View
            style={[
              styles.sectionTitleContainer,
              {
                opacity: titleOpacity,
                transform: [{ translateY: titleTransform }],
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Populares</Text>
            <View style={styles.sectionTitleLine} />
          </Animated.View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bookRow}>
            {renderBooks(popularBooks)}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <Animated.View
            style={[
              styles.sectionTitleContainer,
              {
                opacity: titleOpacity,
                transform: [{ translateY: titleTransform }],
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Adicionados Recentemente</Text>
            <View style={styles.sectionTitleLine} />
          </Animated.View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bookRow}>
            {renderBooks(recentBooks)}
          </ScrollView>
        </View>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F4', 
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerImage: {
    width: width,
    height: 250, // Ajuste conforme necessário
    borderRadius: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -20,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitleContainer: {
    marginHorizontal: 10,
    marginBottom: -20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700', // Peso mais forte para destacar
    color: '#3C3C3C', // Cinza sofisticado
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 15,
    padding: 3,
  },
  sectionTitleLine: {
    height: 3,
    backgroundColor: '#4b3832', // Laranja vibrante
    marginTop: 5,
    width: 100,
    marginBottom: 30,
    marginLeft: 5,
  },
  bookRow: {
    flexDirection: 'row',
    marginHorizontal: 10,
    height: 250,
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
  },
  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 15, // Arredondamento dos cantos
  },
});

export default Bookconnect;