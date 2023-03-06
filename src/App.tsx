import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import Item from './components/Item';

const PADDING = 20;
interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function App(): JSX.Element {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('title');
  const [data, setData] = useState<IPost[] | null>(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await posts.json();
      };

      fetchData().then((posts: IPost[]) => setData(posts));
    } catch (error) {
      console.error;
    }
  }, []);

  const handleItemClick = useCallback((title: string) => {
    setTitle(title);
    console.log('📢 [App.tsx:31]', 'test');
  }, []);
  // const handleItemClick = (title: string) => {
  //   setTitle(title);
  //   console.log('📢 [App.tsx:31]', 'test');
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[styles.text, isGreen && styles.greenText]}
        onPress={() => setIsGreen(!isGreen)}>
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Item key={item.id} item={item} handleClick={handleItemClick} />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f3f3f',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  greenText: {
    color: 'green',
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
