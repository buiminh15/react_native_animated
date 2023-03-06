import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IPost, ITodo} from '../App';

function SubItem({item}: {item: IPost | ITodo}) {
  return (
    <View style={styles.subItem}>
      <Text>{item?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#A6BACB',
    marginBottom: 10,
  },
  subItem: {
    height: 200,
    width: 100,
    backgroundColor: 'red',
    marginBottom: 20,
    marginHorizontal: 10,
  },
});

export default memo(SubItem);
