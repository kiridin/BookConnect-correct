import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Text,
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Keyboard,
  SectionList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputWithHamburgerMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const translateX = useRef(new Animated.Value(-300)).current;
  const textInputRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      if (textInputRef.current && textInputRef.current.isFocused()) {
        setCategoryVisible(false);
        setSearchText('');
      }
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(translateX, {
      toValue: -300,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  const handleSearchFocus = () => {
    setCategoryVisible(true);
  };

  const handleSearchBlur = () => {
    if (searchText.length === 0) {
      setCategoryVisible(false);
    }
  };

  const handleSearchChange = async (text) => {
    setSearchText(text);
    if (text.length > 0) {
      try {
        const response = await fetch(`http://192.168.100.57:3000/books?search=${text}`);
        const data = await response.json();
        if (response.ok) {
          const filtered = Object.keys(data).map(category => ({
            title: category,
            data: data[category]
          }));
          setFilteredBooks(filtered);
          setCategoryVisible(true);
        } else {
          console.error('Erro na resposta da API:', data);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    } else {
      setFilteredBooks([]);
      setCategoryVisible(false);
    }
  };
  
  

  const renderBookItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetails', { book: item })}>
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderCategoryHeader = ({ section }) => (
    <View style={styles.category}>
      <Text style={styles.categoryTitle}>{section.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}>
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={openMenu}>
              <Icon style={styles.barIcon} name="bars" size={24} color="#4b3832" />
            </TouchableOpacity>
            <TextInput
              ref={textInputRef}
              style={styles.searchInput}
              placeholder="Pesquisar..."
              placeholderTextColor="#4b3832"
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              onChangeText={handleSearchChange}
              value={searchText}
            />
            <View style={styles.sectionTitleLine} />
            <Icon style={styles.searchIcon}  name="search" size={24} color="#4b3832" />
          </View>
        </View>

        {categoryVisible && (
          <SectionList
            sections={filteredBooks}
            renderItem={renderBookItem}
            renderSectionHeader={renderCategoryHeader}
            keyExtractor={(item) => item.id.toString()}
            style={styles.sectionList}
          />
        )}

        <Modal transparent={true} visible={menuVisible} onRequestClose={closeMenu}>
          <Pressable style={styles.overlay} onPress={closeMenu}>
            <Animated.View style={[styles.sideMenu, { transform: [{ translateX }] }]}>
              <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ChatApp')}>
                <Icon name="book" size={22} color="#ffffff" style={styles.menuIcon} />
                <Text style={styles.menuText}>Athena</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Categorias')}>
                <Icon name="list" size={22} color="#ffffff" style={styles.menuIcon} />
                <Text style={styles.menuText}>Catálogo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Chat')}>
                <Icon name="comments" size={22} color="#ffffff" style={styles.menuIcon} />
                <Text style={styles.menuText}>Chat</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Estante')}>
                <Icon name="bookmark" size={22} color="#ffffff" style={styles.menuIcon} />
                <Text style={styles.menuText}>Minha Estante</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Sobre')}>
                <Icon name="info-circle" size={22} color="#ffffff" style={styles.menuIcon} />
                <Text style={styles.menuText}>Sobre Nós</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitleLine: {
    height: 40,
    backgroundColor: 'black',
    width: 3,
    marginRight: 10,
  },
  searchBarWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: '100%',
    height: 80,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '2%',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 20,
    fontSize: 16,
    color: '#4b3832',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  sideMenu: {
    height: '100%',
    width: 230,
    backgroundColor: '#4b3832',
    paddingTop: 30,
    paddingHorizontal: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingRight: 20,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: '#ffffff',
    flexShrink: 1,
    width: 200,
  },
  category: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookTitle: {
    fontSize: 16,
    marginVertical: 5,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  sectionList: {
    paddingHorizontal: 20,
  },

  searchIcon: {
    marginRight: 10,

  },
  barIcon:{
    marginLeft: 10,
  }
});

export default InputWithHamburgerMenu;