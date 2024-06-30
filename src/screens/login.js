import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    Alert.alert('Login', `Email: ${email}\nSenha: ${password}`);
  };

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
         <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputGroup}>
        <FontAwesome name="envelope" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputGroup}>
        <FontAwesome name="key" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.togglePassword}>
          <FontAwesome
            name={isPasswordVisible ? "eye" : "eye-slash"}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity  style={styles.forgotPassword}  onPress={() => navigation.navigate('EsqueceuSenha')}>
        <Text onPress={() => navigation.navigate('EsqueceuSenha')} style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword}  onPress={() => navigation.navigate('Cadastro')}>
        <Text  onPress={() => navigation.navigate('Cadastro')} style={styles.register}>Primeiro acesso? Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Bookconnect')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View >
        <Image source={require('../../assets/livrou.png')} style={[styles.booksImage]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCA39F',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: '700',
    color: '#fff', 
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 15,
    padding: 3,
    marginTop: -15,
    marginBottom: 30,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 35,
    fontSize: 14,
    paddingLeft: 40,
    backgroundColor: '#fff',
    zIndex: 998,
  },
  icon: {
    position: 'absolute',
    left: 10,
    zIndex: 999,
  },
  togglePassword: {
    position: 'absolute',
    right: 10,
    padding: 10,
    zIndex: 998,
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 15,
    color: '#fff',
    zIndex: 999,

  },
  register: {
    marginTop: 20,
    fontSize: 15,
    color: '#fff',
  },
  button: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#000',
    marginTop: 20,
    alignItems: 'center',
    zIndex: 999,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  booksImage: {
    resizeMode: 'stretch',
    width: 510,
    height: 600,
    marginTop: -450,
    marginBottom: -275,
  },
  logo: {
    width: 250,
    height: 250,
}
});

