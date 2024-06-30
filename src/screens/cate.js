import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import Navbar from '../components/navbar';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { title: 'Ficção Científica', image: require('../../assets/category/scifi.png'), screen: 'Ficcao' },
  { title: 'Religião', image: require('../../assets/category/religion.png'), screen: 'Religiao' },
  { title: 'Biografias', image: require('../../assets/category/biography.png'), screen: 'Biografias' },
  { title: 'Autoajuda', image: require('../../assets/category/selfhelp.png'), screen: 'AutoAjuda' },
  { title: 'Negócios', image: require('../../assets/category/business.png'), screen: 'Negocios' },
  { title: 'Filosofia', image: require('../../assets/category/philosophy.png'), screen: 'Filosofia' },
  { title: 'Romance', image: require('../../assets/category/romance.png'), screen: 'Romance' },
  { title: 'Suspense', image: require('../../assets/category/suspence.png'), screen: 'Suspense' },
  { title: 'Terror', image: require('../../assets/category/horror.png'), screen: 'Terror' },
  { title: 'História', image: require('../../assets/category/history.png'), screen: 'Historia' },
  { title: 'Ciência e Tecnologia', image: require('../../assets/category/scitech.png'), screen: 'Ciencia' },
  { title: 'Saúde e Bem-estar', image: require('../../assets/category/health.png'), screen: 'Saude' },
  { title: 'Arte', image: require('../../assets/category/art.png'), screen: 'Arte' },
  { title: 'Culinária', image: require('../../assets/category/culinary.png'), screen: 'Culinaria' },
  { title: 'Turismo', image: require('../../assets/category/tourism.png'), screen: 'Turismo' },
  { title: 'Infantil', image: require('../../assets/category/children.png'), screen: 'Infantil' },
];

export default function Cate() {
  const navigation = useNavigation();
  const [clickedIndex, setClickedIndex] = useState(null);

  const handlePress = (index, screen) => {
    setClickedIndex(index);
    setTimeout(() => {
      navigation.navigate(screen);
    }, 100); // Pequeno delay para mostrar a mudança de cor
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Categorias</Text>
        <View style={styles.separator} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(index, category.screen)} activeOpacity={1}>
              <AnimatedCard category={category} index={index} isClicked={clickedIndex === index} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Navbar />
    </SafeAreaView>
  );
}

const AnimatedCard = ({ category, index, isClicked }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, scaleAnim, index]);

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ scale: scaleAnim }], backgroundColor: isClicked ? '#EBDACC' : '#FFFFFF' }]}>
      <Text style={styles.text}>{category.title}</Text>
      <ImageBackground source={category.image} style={styles.image} imageStyle={styles.imageBackground}>
        <View style={styles.overlay} />
      </ImageBackground>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F4F4',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F4F4',
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3C3C3C',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 15,
    padding: 3,
    marginLeft: 12,
  },
  separator: {
    height: 3,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 90,
    height: 65,
    marginLeft: 'auto',
    marginRight: -14,
    justifyContent: 'center',
    marginBottom: -24,
    marginTop: -19,
  },
  imageBackground: {
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
});
