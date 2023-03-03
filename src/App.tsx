/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from './Colors';
import HeaderBar from './components/HeaderBar';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1.2, y: 0}}
        colors={[Colors.main, Colors.main1]}
        style={styles.linearGradient}>
        <HeaderBar />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {flex: 1},
});

export default App;
