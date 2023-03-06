/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import {memo} from 'react';
import {FlatList, Text, View} from 'react-native';
import {IData} from '../App';
import SubItem from './SubItem';

const Item = ({item}: {item: IData}) => {
  console.log('📢 [Item.tsx:9]', item);
  return (
    <View>
      <Text>{item.categoryName}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={item.data}
        renderItem={({item}) => <SubItem item={item} />}
        keyExtractor={(_, index) => `sub-${item.categoryName}-${index}`}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#A6BACB',
//     marginBottom: 10,
//   },
//   subItem: {
//     height: 200,
//     width: 100,
//     backgroundColor: 'red',
//     marginBottom: 20,
//     marginHorizontal: 10,
//   },
// });

export default memo(Item);
