import {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Item = ({item, handleClick}: {item: IPost; handleClick: () => void}) => {
  console.log('📢 [App.tsx:7]', 'render item');
  return (
    <TouchableOpacity
      style={[styles.item]}
      onPress={() => handleClick(item.title)}>
      <Text style={{fontSize: 16, color: '#14425A'}}>{item.title}</Text>
      <Text>{item.body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#A6BACB',
    marginBottom: 10,
  },
});

export default memo(Item);
