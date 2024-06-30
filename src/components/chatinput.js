import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const InputContainer = ({ userInput, setUserInput, startVoiceRecognition, sendMessage, isRequestInProgress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.userInput}
        value={userInput}
        onChangeText={setUserInput}
        placeholder="Digite sua mensagem..."
        placeholderTextColor="#ccc"
      />
      <TouchableOpacity style={styles.voiceButton} onPress={startVoiceRecognition}>
        <FontAwesome name="microphone" size={24} color="#0d0d0d" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={isRequestInProgress}>
        {isRequestInProgress ? <ActivityIndicator color="#fff" /> : <FontAwesome name="paper-plane" size={24} color="#0d0d0d" />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    bottom: 40,
    backgroundColor: "#a09999"
  },
  userInput: {
    flex: 1,
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  voiceButton: {
    backgroundColor: '#ffff',
    borderRadius: 30,
    padding: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#ffff',
    borderRadius: 30,
    padding: 15,
  },
});

export default InputContainer;
