import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordVisibleConfirm, setIsPasswordVisibleConfirm] = useState(false);
    const navigation = useNavigation();

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const togglePasswordVisibilityConfirm = () => {
        setIsPasswordVisibleConfirm(!isPasswordVisibleConfirm);
    };

    const handleLogin = () => {
        Alert.alert('Login', `Email: ${email}\nSenha: ${password}`);
    };

    const { width } = Dimensions.get('window');

    return (
        <View style={styles.container}>
             <View style={styles.logoContainer}>
            </View>
            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.inputGroup}>
                <FontAwesome name="user" size={24} color="#000" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                    keyboardType="default"
                />
            </View>
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
            <View style={styles.inputGroup}>
                <FontAwesome name="key" size={24} color="#000" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirme a Senha"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isPasswordVisibleConfirm}
                />
                <TouchableOpacity onPress={togglePasswordVisibilityConfirm} style={styles.togglePassword}>
                    <FontAwesome
                        name={isPasswordVisibleConfirm ? "eye" : "eye-slash"}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
            <Text  onPress={() => navigation.navigate('Login')} style={styles.cancel}>Voltar</Text>
      
      </TouchableOpacity>
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

    cancel:{
        marginTop: 10,
        fontSize: 18,
        color: '#fff',

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
        marginBottom: 60,
        
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
        borderColor: '#fff',
        borderRadius: 35,
        fontSize: 14,
        paddingLeft: 40,
        backgroundColor: '#f5f5f5',
        marginTop: 20,
    },
    icon: {
        position: 'absolute',
        left: 13,
        zIndex: 999,
        bottom: 15,
        
    },
    togglePassword: {
        position: 'absolute',
        right: 10,
        padding: 10,
        top: 25,
    },
    button: {
        width: '100%',
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#000',
        marginTop: 30,
        alignItems: 'center',

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
