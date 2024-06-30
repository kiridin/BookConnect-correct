import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';


import Router from "./src/routers/router";



SplashScreen.preventAutoHideAsync().catch(() => {});

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {

      } catch (e) {
        console.warn(e);
      } finally {
        setTimeout(() => {
          setAppIsReady(true);
        }, 5000); 
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
     
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5dc',
  },
});

export default App;