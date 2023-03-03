import React from 'react';
import {Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Block from './Block';
import TextView from './TextView';

function HeaderBar() {
  const handleBack = () => {
    console.log('back');
  };
  const handleFavourite = () => {
    console.log('handleFavourite');
  };

  return (
    <Block direction="row" height={50} middle justifyContent="space-between">
      <Pressable onPress={handleBack}>
        <AntDesign size={30} name="arrowleft" color={'white'} />
      </Pressable>
      <TextView h5 color="white">
        Energy Cloud
      </TextView>
      <Pressable onPress={handleFavourite}>
        <AntDesign size={30} name="hearto" color={'white'} />
      </Pressable>
    </Block>
  );
}

export default HeaderBar;
