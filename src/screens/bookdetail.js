import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../components/navbar';

const screenWidth = Dimensions.get('window').width;

export default function BookDetails({ route, navigation }) {
  const { book } = route.params;
  const [liked, setLiked] = useState(false);

  const toggleLike = async () => {
    const newLiked = !liked;
    setLiked(newLiked);

    try {
      const savedFavorites = await AsyncStorage.getItem('favorites');
      let favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
      if (newLiked) {
        favorites.push(book);
      } else {
        favorites = favorites.filter(favBook => favBook.id !== book.id);
      }
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorite:', error);
    }
  };

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground source={book.image} style={styles.background} blurRadius={5}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
            <Image source={book.image} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => alert('Reserva feita!')}>
                <Text style={styles.buttonText}>Reservar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleLike} style={styles.heartButton}>
                <FontAwesome name="heart" size={24} color={liked ? "#e63946" : "#ccc"} />
              </TouchableOpacity>
            </View>
            <Text style={styles.synopsis}>{book.synopsis}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(235, 218, 204, 0.85)', 
    borderRadius: 20,
    margin: 20,
    width: "80%",
    marginTop: 50,
  },
  image: {
    width: screenWidth / 2,
    height: (screenWidth / 2) * 1.5,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4b3832',
    marginBottom: 5,
    textAlign: 'center',
  },
  author: {
    fontSize: 18,
    color: '#4b3832',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4b3832',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  heartButton: {
    padding: 10,
  },
  synopsis: {
    fontSize: 16,
    color: '#4b3832',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});