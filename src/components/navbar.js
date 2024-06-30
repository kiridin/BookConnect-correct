import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'; // Importe o componente LinearGradient
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const Navbar = () => {
  const navigation = useNavigation(); // Hook para acessar a navegação

  return (
    <LinearGradient
      colors={['#4b3832', '#d7b8a1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.navbar}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
        <FontAwesome5 name="list" size={28} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Bookconnect')}>
        <FontAwesome5 name="home" size={28} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatApp')}>
        <FontAwesome5 name="brain" size={28} color="#ffffff" /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
        <FontAwesome5 name="book" size={28} color="#ffffff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default Navbar;
