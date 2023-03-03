import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function HeaderBar() {
  return (
    <View style={[styles.container]}>
      <Pressable>
        <AntDesign size={30} name="arrowleft" color={'white'} />
      </Pressable>
      <Pressable>
        <AntDesign size={30} name="arrowleft" color={'white'} />
      </Pressable>
      <Pressable>
        <AntDesign size={30} name="arrowleft" color={'white'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HeaderBar;
