/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from './Colors';
import Block from './components/Block';
import HeaderBar from './components/HeaderBar';
import Adidas from './assets/adidas.png';
import TextView from './components/TextView';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PADDING = 20;

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1.2, y: 0}}
        colors={[Colors.main, Colors.main1]}
        style={styles.linearGradient}>
        <HeaderBar />
        <Block shadow style={styles.adidasContainer}>
          <Image
            resizeMode="cover"
            source={Adidas}
            alt="adidas shoes"
            style={styles.img}
          />
        </Block>
        <Block style={styles.ratingContainer}>
          <TextView h6 color="#d3d3d3">
            Rating
          </TextView>
          <Block direction="row" middle>
            <AntDesign size={16} name="star" color={'yellow'} />
            <TextView color="yellow" h6>
              4.5
            </TextView>
            <TextView color="white" style={{marginLeft: 4}}>
              (578 people)
            </TextView>
          </Block>
        </Block>
        <Block style={styles.ratingContainer} />
        <Block style={styles.ratingContainer} />
        <Block style={styles.ratingContainer} />
        <Block style={styles.ratingContainer} />
        <Block style={styles.ratingContainer} />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {flex: 1, paddingHorizontal: PADDING, paddingTop: PADDING},
  adidasContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingContainer: {
    flex: 1,
  },
  img: {
    transform: [{rotate: '18deg'}],
  },
});

export default App;
