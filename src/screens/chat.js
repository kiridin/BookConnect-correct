import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { FontAwesome } from '@expo/vector-icons';
import InputContainer from '../components/chatinput'; // Corrigido o nome do componente
import Navbar from '../components/navbar';
import { LinearGradient } from 'expo-linear-gradient';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const scrollViewRef = useRef();

  const sendMessage = () => {
    if (isRequestInProgress) return;

    const userInputValue = userInput.trim();
    if (userInputValue !== '') {
      addMessageToChat(userInputValue, 'user');
      setUserInput('');
      setIsRequestInProgress(true);

      // Simulando uma resposta após um pequeno atraso
      setTimeout(() => {
        const userMessagesCount = messages.filter(msg => msg.role === 'user').length;
        let responseMessage = "Oi";

        if (userMessagesCount === 1) {
          responseMessage = "Muito bem e você?";
        } else if (userMessagesCount === 2) {
          responseMessage = "Fico feliz!";
        }

        addMessageToChat(responseMessage, 'assistant');
        setIsRequestInProgress(false);
      }, 500);
    }
  };

  const addMessageToChat = (message, role) => {
    setMessages(prevMessages => [...prevMessages, { role, content: message }]);
  };

  const startVoiceRecognition = async () => {
    Speech.speak('Oi, Barbara, tudo bem?');
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        {/* Navbar e título omitidos para simplificação */}
        <LinearGradient
          colors={['#F8F4F4', '#0d0d0d']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.titleContainer}
        >
          <Text style={styles.title}>CIA DO LIVRO</Text>
        </LinearGradient>
        <View style={styles.contentContainer}>
          <ScrollView
            style={styles.chatMessages}
            contentContainerStyle={styles.chatMessagesContent}
            ref={scrollViewRef}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          >
            {messages.map((message, index) => (
              <View
                key={index}
                style={[
                  styles.messageContainer,
                  message.role === 'user' ? styles.userMessageContainer : styles.assistantMessageContainer,
                ]}
              >
                <Image
                  source={message.role === 'user' ? require('../../assets/iconcliente.png') : require('../../assets/sobre.png')}
                  style={styles.avatar}
                />
                <View style={[styles.message, message.role === 'user' ? styles.userMessage : styles.assistantMessage]}>
                  {message.content === 'typing...' ? (
                    <View style={styles.typingContainer}>
                      <ActivityIndicator size="small" color="#5A0F19" />
                    </View>
                  ) : (
                    <Text style={message.role === 'user' ? styles.userMessageText : styles.assistantMessageText}>{message.content}</Text>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <InputContainer
        userInput={userInput}
        setUserInput={setUserInput}
        startVoiceRecognition={startVoiceRecognition}
        sendMessage={sendMessage}
        isRequestInProgress={isRequestInProgress}
      />
      <Navbar /> 
   
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F4',
  },
  titleContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 997,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#F8F4F4',
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 120,
    height: 420,
  },
  chatMessages: {
    width: '100%',
  },
  chatMessagesContent: {
    paddingBottom: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
    marginLeft: 'auto',
  },
  assistantMessageContainer: {},
  message: {
    maxWidth: '80%',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  userMessage: {
    backgroundColor: '#666666',
  },
  assistantMessage: {
    backgroundColor: '#E0E0E0',
  },
  userMessageText: {
    color: 'white',
    fontSize: 15,
  },
  assistantMessageText: {
    color: '#000',
    fontSize: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
    marginTop: 10,
    marginBottom: 20,
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Chat;
