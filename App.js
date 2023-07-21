import * as React from 'react';
import { SafeAreaView } from 'react-native';
// import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
      <HomeScreen />
    </SafeAreaView>
  );
  
  export default App;