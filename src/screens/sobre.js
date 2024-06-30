import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, ImageBackground, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../components/navbar';

const screenWidth = Dimensions.get('window').width;

export default function Sobre() {
  const handlePhonePress = () => {
    Linking.openURL('tel:+2424524233');
  };

  const handleAddressPress = () => {
    Linking.openURL('https://www.google.com/maps/search/?api=1&query=R.+Visc.+de+Ipiabas,+58+-+A,+Centro,+Valença+-+RJ,+27600-000');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/ciadolivro');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/gosma.png')} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>SOBRE NÓS</Text>
            <Image
              source={require('../../assets/sobre.png')}
              style={styles.logo}
            />
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <Text style={styles.quote}>
            Livros são o maior presente que uma pessoa pode dar a outra e a si!
          </Text>
          <Text style={styles.infoTitle}>Informações da Livraria</Text>
          <View style={styles.line} />
          <View style={styles.infoContainer}>
            <TouchableOpacity onPress={handlePhonePress} style={styles.row}>
              <Icon style={styles.icon} name="phone" size={24} color="#0d0d0d" />
              <Text style={styles.text}>Telefone: (24) 2452-4233</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddressPress} style={styles.row}>
              <Icon style={styles.icon} name="map-marker" size={24} color="#0d0d0d" />
              <Text style={styles.text}>
                Endereço: R. Visc. de Ipiabas, 58 - A, Centro, Valença - RJ, 27600-000
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={handleInstagramPress}>
              <Text style={styles.instagram}>@ciadolivro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Navbar />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#ffff',
    borderRadius: 30,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F4F4',
    height: "100%",
  },
  backgroundImage: {
    width: '100%',
    height: screenWidth * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#F8F4F4',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: "-65%",
    marginLeft: "-10%",
  },
  logo: {
    width: 120,
    height: 120,
    marginLeft: "60%",
    marginTop: "-10%",
  },
  scrollView: {
    backgroundColor: '#fff',
    height: "100%",
  },
  contentContainer: {
    marginTop: -80, 
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 20,
  },
  quote: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
    width: "80%",
    marginLeft: "10%",
    marginTop: "-42%",
    fontWeight: 'bold',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  line: {
    height: 2,
    backgroundColor: '#000',
    marginBottom: 15,
    marginHorizontal: 50,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
  instagram: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginTop: -5,
  },
});
