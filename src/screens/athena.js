import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { FontAwesome } from '@expo/vector-icons';
import InputWithHamburgerMenu from '../components/input';
import Navbar from '../components/navbar';
import { LinearGradient } from 'expo-linear-gradient';
import InputContainer from '../components/athenainput'; 

function ChatApp() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '',
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const scrollViewRef = useRef();

  useEffect(() => {
    const message = "Oi, eu sou Athena, a IA da BookConnect 📚. Qual tema você gostaria de explorar em sua próxima leitura?";
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < message.length) {
        setMessages([{ role: 'assistant', content: message.substring(0, index + 1) }]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 30); 

    return () => clearInterval(intervalId);
  }, []);

  const sendMessage = async () => {
    if (isRequestInProgress) return;

    const userInputValue = userInput.trim();
    if (userInputValue !== '') {
      addMessageToChat(userInputValue, 'user');

      setUserInput('');
      setIsRequestInProgress(true);

      const typingIndicator = { role: 'assistant', content: 'typing...' };
      setMessages((prevMessages) => [...prevMessages, typingIndicator]);

      try {
        const response = await fetch('http://192.168.100.57:5000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userInputValue }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.content !== 'typing...'));
        addMessageToChat(result.response, 'assistant');
      } catch (error) {
        console.error('Fetch error: ', error);
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.content !== 'typing...'));
        addMessageToChat('Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde.', 'assistant');
      } finally {
        setIsRequestInProgress(false);
      }
    }
  };

  const addMessageToChat = (message, role) => {
    setMessages((prevMessages) => [...prevMessages, { role, content: message }]);
  };

  const startVoiceRecognition = async () => {
    Speech.speak('Oi, eu sou Athena a IA da BookConnect, que te indica o melhor livro pra sua melhor leitura. Sobre o que gostaria de ler?');
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
        <InputWithHamburgerMenu />
        <LinearGradient
          colors={['#EBDACC', '#F2B38C']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.titleContainer}
        >
          <Text style={styles.title}>ATHENA</Text>
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
                  source={message.role === 'user' ? require('../../assets/user.png') : require('../../assets/athena.png')}
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
        <Text style={styles.disclaimer}>As respostas da IA podem conter informações incorretas ou imprecisas.</Text>
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
    backgroundColor: '#EBDACC',
  },
  titleContainer: {
    position: 'absolute',
    top: 120,
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
    color: '#5A0F19',
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 200,
    backgroundColor: "#EBDACC",
    height: 400,
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
    shadowRadius

: 2,
    elevation: 1,
  },
  userMessage: {
    backgroundColor: '#F2B38C',
    marginLeft: 'auto',
  },
  assistantMessage: {
    backgroundColor: '#ffffff',
  },
  userMessageText: {
    color: '#ffffff',
    textAlign: 'left',
  },
  assistantMessageText: {
    color: '#5A0F19',
    textAlign: 'left',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 10,
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#5A0F19',
    marginVertical: 10,
  },
});

export default ChatApp;
